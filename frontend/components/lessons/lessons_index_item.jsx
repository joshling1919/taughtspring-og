import React from 'react';
import { withRouter } from 'react-router';

class LessonsIndexItem extends React.Component {
  _goToLesson(e) {
    e.preventDefault(e);
    this.props.router.push(`lessons/${this.props.lesson.id}`);
  }

  _displaySubject() {
    if (this.props.lesson.subject) {
      return `${this.props.lesson.subject}`;
    } else {
      return "n/a";
    }
  }

  _displayGrade() {
    if (this.props.lesson.grade) {
      return `${this.props.lesson.grade}th `;
    } else {
      return "n/a";
    }
  }

  _displayObjective(){
    if (this.props.lesson.objectives[0]) {
      return `${this.props.lesson.objectives[0].description}`;
    } else {
      return "n/a";
    }
  }

  _goToProfile(e){
    e.preventDefault(e);
    e.stopPropagation(e);
    this.props.router.push(`profiles/${this.props.lesson.user_id}`);
  }

  render() {
    const { title, id, user, image_url } = this.props.lesson;

      return(
        <li onClick={this._goToLesson.bind(this)}
            className="index-item">
          <div className="title-container">
            <a className="title" href={`#lessons/${id}`}>{title}</a>
          </div>
          <div className="index-pic-background">
            <div className="index-pic-container">
              <img onClick={this._goToLesson.bind(this)}
                className="index-pic"
                src={image_url}/>
            </div>
          </div>
          <div className="index-description">
            <div className="index-description-field index-author">
              <label className="index-label">By: </label>
              <a onClick={this._goToProfile.bind(this)}
                >{user.first_name} {user.last_name}</a>
            </div>
            <div className="index-description-field">
              <label className="index-label">Subject: </label>
              <span>{this._displaySubject.bind(this)()}</span>
            </div>
            <div className="index-description-field">
              <label className="index-label">Grade: </label>
              <span>{this._displayGrade.bind(this)()}</span>
            </div>
            <div className="index-description-field">
              <label
                className="index-label index-objective">Objective: </label>
              <span
                className="index-objective"
                >{this._displayObjective.bind(this)()}</span>
            </div>
          </div>
        </li>
      );

    }
}




export default withRouter(LessonsIndexItem);
