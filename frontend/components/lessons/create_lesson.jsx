import React from 'react';
import Errors from '../errors';
import LessonForm from './lesson_form';

class CreateLesson extends React.Component {
  constructor(props){
    super(props);
  }
  _handleCreateLesson(e){
    e.preventDefault();
    let lesson = { lesson:
      {
        title: e.target.title.value,
        user_id: this.props.currentUser.id,
        subject: this._checkForNullSubject(e),
        grade: this._checkForNullGrade(e),
        lesson_date: e.target.lesson_date.value
      }
    };
    this.props.createLesson(lesson);
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
    const blankTemplate = {
      title: "",
      grade: undefined,
      subject: undefined,
      date: undefined
    };
    debugger;
    return(
      <LessonForm template={blankTemplate}
        handleSubmit={this._handleCreateLesson.bind(this)}
        errors={this.props.errors}/>
    );
  }
}

export default CreateLesson;
