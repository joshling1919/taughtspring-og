import React from 'react';
import EditLessonButton from './edit_lesson_button';
import { withRouter } from 'react-router';

class LessonShow extends React.Component {

  _redirectToEdit() {
    this.props.router.push(`lessons/${this.props.lesson.id}/edit`);
  }

  render(){
    let title, lessonDate, subject, grade, userId;
    if (this.props.lesson) {
      let lesson = this.props.lesson;
      title = lesson.title;
      lessonDate = lesson.lesson_date;
      subject = lesson.subject;
      grade = lesson.grade;
      userId = lesson.user_id;
    }

    return(
      <div>
        {title}
        {lessonDate}
        {subject}
        {grade}
        <EditLessonButton userId={ userId } redirectToEdit={this._redirectToEdit.bind(this)} />
      </div>
    );
  }
}



export default withRouter(LessonShow);
