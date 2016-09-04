import React from 'react';
import { withRouter } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './auth/login_container';
import SignupContainer from './auth/signup_container';


class App extends React.Component {

  render() {
    return(
      <main>
        <NavBarContainer />
        <LoginContainer />
        <SignupContainer />
        <div className="content">
          {this.props.children}
        </div>
      </main>
    );
  }
}



export default withRouter(App);
