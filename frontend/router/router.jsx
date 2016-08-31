import React from 'react';
import { Router,
         Route,
         hashHistory,
         IndexRoute
       } from 'react-router';
import App from '../components/app';
import LoginContainer from '../components/auth/login_container';
import SignupContainer from '../components/auth/signup_container';


const routes = (
  <Route path="/" component={ App }>
    <Route path="login" component={ LoginContainer }/>
    <Route path="signup" component={ SignupContainer }/>
  </Route>
);

class AppRouter extends React.Component {

  render() {


    return(
      <Router history={ hashHistory }>
        { routes }
      </Router>
    );
  }
}

export default AppRouter;
