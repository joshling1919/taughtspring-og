import React from 'react';
import EditDeleteLessonButtons from '../lessons/edit_lesson_button';
import { withRouter } from 'react-router';

class ProfileLessonsIndexItem extends React.Component {
  _redirectToEdit() {
    this.props.router.push(`lessons/${this.props.lesson.id}/edit`);
  }

  _deleteLesson() {
    this.props.deleteLesson(this.props.lesson.id);
    this.props.router.push(`profiles/${this.props.lesson.user_id}`);
  }

  render() {
    const { lesson, currentUser } = this.props;
    return(
      <li className="profile-item-container group">
        <div className="profile-lessons-title">
          <a href={`#/lessons/${lesson.id}`}>{ lesson.title }</a>
        </div>
        <div className="profile-lessons-pic">
          <img className="lessonPic" src={ lesson.image_url } />
        </div>
        <div className="profile-lessons-description">
          <EditDeleteLessonButtons
            lessonUserId={ lesson.user_id }
            currentUser={currentUser}
            redirectToEdit={ this._redirectToEdit.bind(this) }
            deleteLesson={ this._deleteLesson.bind(this) }/>
        </div>
      </li>
    );
  }


}

export default withRouter(ProfileLessonsIndexItem);
