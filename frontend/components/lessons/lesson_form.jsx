import React from 'react';
import Errors from '../errors';

import UploadPictureButton from './upload_picture_button';

class LessonForm extends React.Component {

  _updateTitle(e){
    e.preventDefault();
    this.props.updateTitle(e.target.value);
  }

  render() {
    const { template, handleSubmit, errors,
      upload } = this.props;
    return(
      <div className="lesson-form-component">
        <form className="lesson-form" onSubmit={handleSubmit}>
          <Errors errors={errors}/>
          <div className="lesson-pic-container">
            <img className="lesson-pic" src={template.imageUrl}/>
          </div>
          <div className="lesson-details-container">
            <UploadPictureButton upload={upload}/>
            <div className="lesson-details group">
              <label>Title: </label>
              <input defaultValue={template.title}
                className="lesson-item title"
                name= "title"
                onChange={this._updateTitle.bind(this)}
                type="text"/>
            </div>
            <div className="lesson-details group">
              <label>Grade Level: </label>
              <select defaultValue={template.grade} className="lesson-item" name="grade">
                <option className="optional" value={undefined}>(optional)</option>
                <option value={6}>6th Grade</option>
                <option value={7}>7th Grade</option>
                <option value={8}>8th Grade</option>
              </select>
            </div>
            <div className="lesson-details group">
              <label>Subject: </label>
              <select defaultValue={template.subject} className="lesson-item" name="subject">
                <option className="optional" value={undefined}>(optional)</option>
                <option value="English">English</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="Social Studies">Social Studies</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="lesson-details group">
              <label>Lesson Date: </label>
              <input className="lesson-item"
                defaultValue={template.date}
                type="date"
                placeholder="(optional)"
                name="lesson_date"></input>
            </div>
            <div className="lesson-details group">
              <button className="lesson-item form-submit"
                type="submit">Submit Lesson</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LessonForm;
