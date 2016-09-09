import React from 'react';
import Errors from '../errors';

import UploadPictureButton from './upload_picture_button';

class ShowLesson extends React.Component {

  render() {
    const { template, handleSubmit, upload } = this.props;
    return(
      <div className="lesson-form-component">
        <form className="lesson-form" onSubmit={handleSubmit}>
          <div className="lesson-pic-container">
            <img className="lesson-pic" src={template.image_url}/>
          </div>
          <div className="lesson-details-container">
            <div className="lesson-details group">
              <label>Title: </label>
              <div className="lesson-item title">
                {template.title}
              </div>
            </div>
            <div className="lesson-details group">
              <label>Grade Level: </label>
              <div className="lesson-item">
                {template.grade}
              </div>
            </div>
            <div className="lesson-details group">
              <label>Subject: </label>
              <div className="lesson-item">
                {template.subject}
              </div>
            </div>
            <div className="lesson-details group">
              <label>Lesson Date: </label>
              <div className="lesson-item">
                {template.lesson_date}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ShowLesson;
