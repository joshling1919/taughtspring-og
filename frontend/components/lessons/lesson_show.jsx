import React from 'react';
import EditDeleteLessonButtons from './edit_lesson_button';
import { withRouter } from 'react-router';

class LessonShow extends React.Component {

  _redirectToEdit() {
    this.props.router.push(`lessons/${this.props.lesson.id}/edit`);
  }

  _deleteLesson() {
    this.props.deleteLesson(this.props.lesson.id);
    this.props.router.push('/');
  }

  render(){
    let title, lessonDate, subject, grade, userId, imageUrl;
    if (this.props.lesson) {
      let lesson = this.props.lesson;
      title = lesson.title;
      lessonDate = lesson.lesson_date;
      subject = lesson.subject;
      grade = lesson.grade;
      userId = lesson.user_id;
      imageUrl= lesson.image_url;
    }

    return(
      <div>
        <ul>
          <li><img src={imageUrl}/></li>
          <li>{title}</li>
          <li>{lessonDate}</li>
          <li>{subject}</li>
          <li>{grade}</li>
          <EditDeleteLessonButtons userId={ userId }
            redirectToEdit={this._redirectToEdit.bind(this)}
            deleteLesson={this._deleteLesson.bind(this)}/>
        </ul>
      </div>
    );
  }
}



export default withRouter(LessonShow);
