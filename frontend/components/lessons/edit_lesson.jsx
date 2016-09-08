import React from 'react';
import Errors from '../errors';
import LessonFormContainer from './lesson_form_container';
import EditObjectivesForm from '../lesson_parts/edit_objectives_form';
import { merge } from 'lodash';
import Tabs from '../tabs/tabs';
import Pane from '../tabs/pane';
import SectionForm from '../lesson_parts/section_form';

class EditLesson extends React.Component {
  constructor(props){
    super(props);
    this.uploadCallback = this.uploadCallback.bind(this);

    this._updateSectionField = this._updateSectionField.bind(this);
    this._deleteSection = this._deleteSection.bind(this);
    this._addMisconception = this._addMisconception.bind(this);
    this._updateMisconception = this._updateMisconception.bind(this);
    this._deleteMisconception = this._deleteMisconception.bind(this);
    this._addCFU = this._addCFU.bind(this);
    this._updateCFU = this._updateCFU.bind(this);
    this._deleteCFU = this._deleteCFU.bind(this);
  }


  _handleUpdateLesson(e){
    e.preventDefault();
    let lesson = { lesson:
      {
        id: this.props.params.lessonId,
        title: this.props.singleLesson.title,
        user_id: this.props.currentUser.id,
        subject: this.props.singleLesson.subject,
        grade: this.props.singleLesson.grade,
        lesson_date: this.props.singleLesson.lesson_date,
        image_url: this.props.singleLesson.image_url,
        thumbnail_url: this.props.singleLesson.thumbnail_url
      }
    };
    this.props.updateLesson(lesson);
  }

  uploadCallback(error, results) {
    if(!error) {
      let lesson = merge({}, this.props.singleLesson,
                         { image_url: results[0].url,
                           thumbnail_url: results[0].thumbnail_url });
      this.props.updatePicture(lesson);
    }
  }

  _upload(e) {
    e.preventDefault();
    let self = this;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, this.uploadCallback);
  }

  _essentials() {
    return(
      [<Pane key="essentials" label="Essentials">
          <LessonFormContainer
            handleSubmit={this._handleUpdateLesson.bind(this)}
            errors={this.props.errors}
            upload={this._upload.bind(this)}
            />
      </Pane>]
    );
  }

  _objective() {
    return(
      [<Pane key="objectives" label="Objective">
        <EditObjectivesForm />
      </Pane>]
    );
  }

  _updateSectionField(e){
    this.props.updateSection(e.target.name, e.target.value,
      parseInt(e.target.id));
  }

  _deleteSection(e){
    this.props.deleteSection(parseInt(e.target.name));
  }

  _addMisconception(e){

  }

  _updateMisconception(e){

  }

  _deleteMisconception(e) {


  }

  _addCFU(e){

  }

  _updateCFU(e){

  }

  _deleteCFU(e) {

  }

  _sections() {
    let sections = [];
    let singleLessonSections = [];
    if (this.props.singleLesson.sections) {
      singleLessonSections = this.props.singleLesson.sections;
    }
    for (let i = 0; i < singleLessonSections.length; i++) {
      sections.push(<Pane key={singleLessonSections[i].created_at}
        label={singleLessonSections[i].name}>
        <SectionForm section={singleLessonSections[i]}
          updateSectionField={this._updateSectionField}
          deleteSection={this._deleteSection}
          misconceptions={singleLessonSections[i].misconceptions}
          addMisconception={this._addMisconception}
          updateMisconception={this._updateMisconception}
          deleteMisconception={this._deleteMisconception}
          cfus={singleLessonSections[i].cfus}
          addCFU={this._addCFU}
          sectionId={singleLessonSections[i].id}
          updateCFU={this._updateCFU}
          deleteCFU={this._deleteCFU}
          index={i} />
    </Pane>);
    }
    return (
      sections
    );
  }

  _addSection() {
    return(
      <Pane
        key="addSection"
        label="+ Add Section" />
    );
  }

  _newSection() {
    this.props.addSection(this.props.singleLesson.id);
  }

  _allPanes() {
    return(
      this._essentials().concat(this._objective(),
      this._sections(), this._addSection())
    );
  }



  render(){
      return(
        <Tabs selected={0}
          newSection={this._newSection.bind(this)}>
          {this._allPanes()}
        </Tabs>
      );
  }
}

export default EditLesson;
