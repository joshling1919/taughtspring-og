import React from 'react';
import ProfileLessonsIndex from './profile_lessons_index';


class Profile extends React.Component {
  getChildContext() {
    return { currentUser: this.props.currentUser };
  }

  _profileTitle() {
    return `${this.props.profile.first_name}'s Lessons`;
  }

  render(){
    if (this.props.profile) {
      return(
        <div>
          <h3
            className="profile-title"
            >{this._profileTitle.bind(this)()}</h3>
          <div className="profile-container group">
            <ProfileLessonsIndex
              currentUser={this.props.currentUser}
              lessons={this.props.profile.lessons}
              deleteLesson={this.props.deleteLesson}/>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}

Profile.childContextTypes = {
  currentUser: React.PropTypes.object
};


export default Profile;
