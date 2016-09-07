import React from 'react';
import Errors from '../errors';

import UploadPictureButton from './upload_picture_button';

class LessonForm extends React.Component {

  _updateTitle(e){
    e.preventDefault();
    this.props.updateTitle(e.target.value);
  }

  _updateSubject(e){
    e.preventDefault();
    if (e.target.value === "(optional)" ) {
      this.props.updateSubject(null);
    } else {
      this.props.updateSubject(e.target.value);
    }
  }

  _updateGrade(e) {
    e.preventDefault();
    if (e.target.value === "(optional)") {
      this.props.updateGrade(null);
    } else {
      this.props.updateGrade(parseInt(e.target.value));
    }
  }

  _updateDate(e){
    e.preventDefault();
    this.props.updateDate(e.target.value);
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
              <select defaultValue={template.grade}
                className="lesson-item"
                name="grade"
                onChange={this._updateGrade.bind(this)}>
                <option className="optional" value={undefined}>(optional)</option>
                <option value={6}>6th Grade</option>
                <option value={7}>7th Grade</option>
                <option value={8}>8th Grade</option>
              </select>
            </div>
            <div className="lesson-details group">
              <label>Subject: </label>
              <select defaultValue={template.subject}
                className="lesson-item"
                name="subject"
                onChange={this._updateSubject.bind(this)}>
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
                name="lesson_date"
                onChange={this._updateDate.bind(this)}></input>
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
