import React from 'react';
import Errors from '../errors';
import NewLessonForm from './new_lesson_form';
import Tabs from '../tabs/tabs';
import Pane from '../tabs/pane';
import ObjectiveForm from '../lesson_parts/objective_form';
import SectionForm from '../lesson_parts/section_form';
import { merge } from 'lodash';

class CreateLesson extends React.Component {
  constructor(props){
    super(props);
    let userSubject = this.props.currentUser.subject;
    let userGrade = this.props.currentUser.grade;
    this.state = {
      image_url:"http://www.nationofchange.org/wp-content/uploads/2016/05/education.jpg",
      thumbnail_url: "",
      title: "",
      grade: userGrade,
      subject: userSubject,
      lesson_date: undefined,
      user_id: this.props.currentUser.id,
      objectives: [""],
      key_points: [""],
      sections: [{ name: "", description: "",
        misconceptions: [], cfus: [["",""]] }]
    };
    this._upload = this._upload.bind(this);
    this._updateTitle = this._updateTitle.bind(this);
    this._updateGrade = this._updateGrade.bind(this);
    this._updateSubject = this._updateSubject.bind(this);
    this._updateDate = this._updateDate.bind(this);
    this._updateObjectives = this._updateObjectives.bind(this);
    this._updateKeyPoints = this._updateKeyPoints.bind(this);
    this._handleCreateLesson = this._handleCreateLesson.bind(this);
    this._addObjective = this._addObjective.bind(this);
    this._deleteObjective = this._deleteObjective.bind(this);
    this._addKeyPoint = this._addKeyPoint.bind(this);
    this._deleteKeyPoint = this._deleteKeyPoint.bind(this);
    this._updateSectionField = this._updateSectionField.bind(this);
    this._deleteSection = this._deleteSection.bind(this);
    this._addMisconception = this._addMisconception.bind(this);
    this._updateMisconception = this._updateMisconception.bind(this);
    this._deleteMisconception = this._deleteMisconception.bind(this);
    this._addCFU = this._addCFU.bind(this);
    this._updateCFU = this._updateCFU.bind(this);
    this._deleteCFU = this._deleteCFU.bind(this);
  }

  _deleteMisconception(e) {
    let sectionIndex = parseInt(e.target.id);
    let misconceptionIndex = parseInt(e.target.name);
    let newSections = JSON.parse(JSON.stringify(this.state.sections));
    let newSection = newSections[sectionIndex];
    let newMisconceptions = newSection.misconceptions;
    newMisconceptions.splice(misconceptionIndex, 1);
    newSection.misconceptions = newMisconceptions;
    newSections[sectionIndex] = newSection;
    this.setState({ sections: newSections });

  }

  _updateMisconception(e){
    let sectionIndex = parseInt(e.target.id);
    let misconceptionIndex = parseInt(e.target.name);
    let newSections = JSON.parse(JSON.stringify(this.state.sections));
    let newSection = newSections[sectionIndex];
    let newMisconceptions = newSection.misconceptions;
    newMisconceptions[misconceptionIndex] = e.target.value;
    newSection.misconceptions = newMisconceptions;
    newSections[sectionIndex] = newSection;
    this.setState({ sections: newSections });
  }


  _addMisconception(e) {
    let sectionIndex = parseInt(e.target.id);
    let newSections = JSON.parse(JSON.stringify(this.state.sections));
    let newSection = newSections[sectionIndex];
    let newMisconceptions = newSection.misconceptions;
    newMisconceptions = newMisconceptions.concat([""]);
    newSection.misconceptions = newMisconceptions;
    newSections[sectionIndex] = newSection;
    this.setState({ sections: newSections });
  }

  _deleteCFU(e) {
    let sectionIndex = parseInt(e.target.id);
    let cfuIndex = parseInt(e.target.name);
    let newSections = JSON.parse(JSON.stringify(this.state.sections));
    let newSection = newSections[sectionIndex];
    let newCFUs = newSection.cfus;
    newCFUs.splice(cfuIndex, 1);
    newSection.cfus = newCFUs;
    newSections[sectionIndex] = newSection;
    this.setState({ sections: newSections });

  }

  _updateCFU(e){
    let sectionIndex = parseInt(e.target.id);
    let cfuIndex = parseInt(e.target.name);
    let newSections = JSON.parse(JSON.stringify(this.state.sections));
    let newSection = newSections[sectionIndex];
    let newCFUs = newSection.cfus;
    newCFUs[cfuIndex][0] = e.target.value;
    newSection.cfus = newCFUs;
    newSections[sectionIndex] = newSection;
    this.setState({ sections: newSections });
  }


  _addCFU(e) {
    let sectionIndex = parseInt(e.target.id);
    let newSections = JSON.parse(JSON.stringify(this.state.sections));
    let newSection = newSections[sectionIndex];
    let newCFUs = newSection.cfus;
    newCFUs = newCFUs.concat([["",""]]);
    newSection.cfus = newCFUs;
    newSections[sectionIndex] = newSection;
    this.setState({ sections: newSections });
  }

  _upload(e) {
    e.preventDefault();
    let self = this;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error) {
        self.setState({
          image_url: results[0].url,
          thumbnail_url: results[0].thumbnail_url
        });
      }
    });
  }

  _handleCreateLesson(e){
    e.preventDefault();
    let lesson = { lesson: merge({},
      this.state, { subject: this._checkForNullSubject(),
      grade: this._checkForNullGrade() })
    };
    this.props.createLesson(lesson);
  }

  _checkForNullGrade(){
    if (this.state.grade === undefined) {
      return null;
    } else {
      return this.state.grade;
    }
  }



  _checkForNullSubject(){
    if (this.state.subject === undefined) {
      return null;
    } else {
      return this.state.subject;
    }
  }


  _updateTitle(e){
    this.setState({ title: e.target.value });
    this.props.clearErrors();
  }

  _updateGrade(e){
    this.setState( { grade: e.target.value });
  }

  _updateSubject(e){

    this.setState( { subject: e.target.value });
  }

  _updateDate(e){
    this.setState({ lesson_date: e.target.value.toString() });
  }

  _updateObjectives(e) {
    let objIndex = e.target.id;
    let objectivesArr = this.state.objectives.slice();
    objectivesArr[objIndex] = e.target.value;
    this.setState( { objectives: objectivesArr });
  }

  _addObjective() {
    this.setState({ objectives: this.state.objectives.concat([""])});
  }

  _deleteObjective(e) {
    let objInd = parseInt(e.target.id);
    let objectivesArr = this.state.objectives.slice();
    objectivesArr.splice(objInd, 1);
    this.setState( { objectives: objectivesArr });
  }

  _updateKeyPoints(e) {
    let kpIndex = e.target.id;
    let keyPointsArr = this.state.key_points.slice();
    keyPointsArr[kpIndex] = e.target.value;
    this.setState( { key_points: keyPointsArr });
  }

  _addKeyPoint() {
    this.setState({ key_points: this.state.key_points.concat([""])});
  }

  _deleteKeyPoint(e) {
    let kpInd = parseInt(e.target.id);
    let keyPointsArr = this.state.key_points.slice();
    keyPointsArr.splice(kpInd, 1);
    this.setState( { key_points: keyPointsArr });
  }

  _essentials() {
    return(
      [<Pane key="essentials" label="Essentials">
        <NewLessonForm template={this.state}
          updateTitle={this._updateTitle}
          updateGrade={this._updateGrade}
          updateSubject={this._updateSubject}
          updateDate={this._updateDate}
          handleSubmit={this._handleCreateLesson}
          errors={this.props.errors}
          upload={this._upload}/>
      </Pane>]
    );
  }

  _objective() {
    return(
      [<Pane key="objective" label="Objective">
        <ObjectiveForm
          objectives={this.state.objectives}
          updateObjectives={this._updateObjectives}
          addObjective={this._addObjective}
          deleteObjective={this._deleteObjective}
          keyPoints={this.state.key_points}
          updateKeyPoints={this._updateKeyPoints}
          addKeyPoint={this._addKeyPoint}
          deleteKeyPoint={this._deleteKeyPoint}
          errors={this.props.errors}/>
      </Pane>]
    );
  }


  _sections() {
    let sections = [];
    for (let i = 0; i < this.state.sections.length; i++) {
      sections.push(<Pane key={i} label={this.state.sections[i].name}>
        <SectionForm section={this.state.sections[i]}
          updateSectionField={this._updateSectionField}
          deleteSection={this._deleteSection}
          misconceptions={this.state.sections[i].misconceptions}
          addMisconception={this._addMisconception}
          updateMisconception={this._updateMisconception}
          deleteMisconception={this._deleteMisconception}
          cfus={this.state.sections[i].cfus}
          addCFU={this._addCFU}
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
    this.setState({
      sections: this.state.sections.concat([{name: "",
        description: "", misconceptions:[],
        cfus:[]}]
      )
    });
  }

  _updateSectionField(e) {
    let ind = parseInt(e.target.id);
    let name = e.target.name;
    let sectionsArr = this.state.sections.slice();
    sectionsArr[ind][name] = e.target.value;
    this.setState( { sections : sectionsArr });
  }

  _deleteSection(e) {
    let ind = parseInt(e.target.id);
    let sectionsArr = this.state.sections.slice();
    sectionsArr.splice(ind, 1);
    this.setState( { sections: sectionsArr });
  }


  _allPanes() {
    return(
      this._essentials().concat(this._objective(), this._sections(), this._addSection())
    );
  }


  render(){
    return(
      <div>
        <button className="lesson-item form-submit"
          type="submit">Submit Lesson</button>
        <Tabs selected={0}
          newSection={this._newSection.bind(this)}>
          {this._allPanes()}
        </Tabs>
      </div>
    );
  }
}

export default CreateLesson;
