import React from 'react';
import { Router,
         Route,
         hashHistory,
         IndexRoute
       } from 'react-router';
import App from '../components/app';
import LoginContainer from '../components/auth/login_container';
import SignupContainer from '../components/auth/signup_container';


class AppRouter extends React.Component {

  render() {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
        <Route path="login" component={ LoginContainer }/>
        <Route path="signup" component={ SignupContainer }/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
