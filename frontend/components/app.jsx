import React from 'react';
import { withRouter } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './auth/login_container';
import SignupContainer from './auth/signup_container';


class App extends React.Component {
  _splashVideo() {
    if (!this.props.currentUser) {
      return(
        <video loop={true} autoPlay={true}
          src="http://res.cloudinary.com/jsling/video/upload/v1473443947/splash_med_yg5dbq.mp4"/>
      );
    }
  }

  render() {
    return(
      <main>
        <NavBarContainer />
        <LoginContainer />
        <SignupContainer />
        {this._splashVideo.bind(this)()}
        <div className="content">
          {this.props.children}
        </div>
      </main>
    );
  }
}



export default withRouter(App);
