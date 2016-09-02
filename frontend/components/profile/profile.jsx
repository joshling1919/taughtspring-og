import React from 'react';
import ProfileLessonsIndex from './profile_lessons_index';


class Profile extends React.Component {

  render(){
    if (this.props.profile) {
      return(
        <div className="profile-container group">
          <div className="user">
            {this.props.profile.first_name}
          </div>
          <ProfileLessonsIndex />
        </div>
      );
    } else {
      return null;
    }
  }

}


export default Profile;
