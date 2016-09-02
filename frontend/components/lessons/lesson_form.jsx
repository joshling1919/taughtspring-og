import React from 'react';
import Errors from '../errors';

const LessonForm = ({template, handleSubmit, errors}) => {
  debugger;
    return(
      <div>
        <form className="pure-form pure-form-aligned" onSubmit={handleSubmit}>
          <Errors errors={errors}/>
          <fieldset>
            <div className="pure-control-group">
              <label>Title: </label>
              <input defaultValue={template.title} className="lesson-item" name= "title" type="text"></input>
            </div>
            <div className="pure-control-group">
              <label>Grade Level: </label>
              <select defaultValue={template.grade} className="lesson-item" name="grade">
                <option className="optional" value={undefined}>(optional)</option>
                <option value={6}>6th Grade</option>
                <option value={7}>7th Grade</option>
                <option value={8}>8th Grade</option>
              </select>
            </div>
            <div className="pure-control-group">
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
            <div className="pure-control-group">
              <label>Lesson Date: </label>
              <input defaultValue={template.date} type="date" placeholder="(optional)" name="lesson_date"></input>
            </div>
            <div className="pure-controls">
              <input type="submit" value="Create Lesson" />
            </div>
          </fieldset>
        </form>
      </div>
    );
}

export default LessonForm;
