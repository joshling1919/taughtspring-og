import React from 'react';
import Errors from '../errors';
import LessonFormContainer from './lesson_form_container';
import EditObjectivesForm from '../lesson_parts/edit_objectives_form';
import { merge } from 'lodash';
import Tabs from '../tabs/tabs';
import Pane from '../tabs/pane';

class EditLesson extends React.Component {
  constructor(props){
    super(props);
    this.uploadCallback = this.uploadCallback.bind(this);
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


  _sections() {
    return (
      []
    );
  }

  // _addSection() {
  //   return(
  //     <Pane
  //       key="addSection"
  //       label="+ Add Section" />
  //   );
  // }


  _allPanes() {
    return(
      this._essentials().concat(this._objective(),
      this._sections())
    );
  }

  render(){
      return(
        <Tabs selected={0}>
          {this._allPanes()}
        </Tabs>
      );
  }
}

export default EditLesson;
