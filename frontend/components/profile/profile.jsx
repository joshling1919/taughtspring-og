import React from 'react';


class Profile extends React.Component {

  render(){
    if (this.props.profile) {
      return(
        <div>
          {this.props.profile.first_name}
        </div>
      );
    } else {
      return null;
    }
  }

}


export default Profile;
