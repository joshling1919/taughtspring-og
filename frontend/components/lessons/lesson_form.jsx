import React from 'react';


class LessonForm extends React.Component {

  _handleCreateLesson(e){
    e.preventDefault();
    let lesson = { lesson:
      {
        title: e.target.title.value,
        user_id: this.props.currentUser.id,
        subject: this._checkForNullSubject(e),
        grade: this._checkForNullGrade(e)
      }
    };
    this.props.createLesson(lesson);
    this.props.history.push('/');
  }

  _checkForNullGrade(e){
    if (e.target.grade.value === "(optional)") {
      return null;
    } else {
      return e.target.grade.value;
    }
  }


  _checkForNullSubject(e){
    if (e.target.subject.value === "(optional)") {
      return null;
    } else {
      return e.target.subject.value;
    }
  }

  render(){
    return(
      <div>
        <form className="pure-form pure-form-aligned" onSubmit={ this._handleCreateLesson.bind(this)}>
          <fieldset>
            <div className="pure-control-group">
              <label htmlFor="title ">Title: </label>
              <input id="title" className="lesson-item" name= "title" type="text"></input>
            </div>
            <div className="pure-control-group">
              <label htmlFor="grade">Grade Level: </label>
              <select id="grade" className="lesson-item" name="grade" value={undefined}>
                <option className="optional" value={undefined}>(optional)</option>
                <option value={6}>6th Grade</option>
                <option value={7}>7th Grade</option>
                <option value={8}>8th Grade</option>
              </select>
            </div>
            <div className="pure-control-group">
              <label>Subject: </label>
              <select className="lesson-item" name="subject" value={undefined}>
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
              <input type="date" placeholder="(optional)" name="lesson_date"></input>
            </div>
            <div className="pure-controls">
              <input type="submit" value="Create Lesson" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default LessonForm;
