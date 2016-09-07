import React from 'react';
import Errors from '../errors';
import LessonFormContainer from './lesson_form_container';
import { merge } from 'lodash';

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
        lesson_date: this.props.singleLesson.date,
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


  render(){
    let template;
    if (this.props.singleLesson) {
      template = {
        title: this.props.singleLesson.title,
        grade: this.props.singleLesson.grade,
        subject: this.props.singleLesson.subject,
        date: this.props.singleLesson.lesson_date,
        imageUrl: this.props.singleLesson.image_url
      };
      return(
        <LessonFormContainer template={template}
          handleSubmit={this._handleUpdateLesson.bind(this)}
          errors={this.props.errors}
          upload={this._upload.bind(this)}
          />
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default EditLesson;
