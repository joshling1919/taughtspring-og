import React from 'react';
import ProfileLessonsIndex from './profile_lessons_index';


class Profile extends React.Component {
  getChildContext() {
    return { currentUser: this.props.currentUser };
  }

  render(){
    if (this.props.profile) {
      return(
        <div className="profile-container group">
          <div className="user">
            <label>
              Name: 
            </label>
            {this.props.profile.first_name}
          </div>
          <ProfileLessonsIndex
            lessons={this.props.profile.lessons}
            deleteLesson={this.props.deleteLesson}/>
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
