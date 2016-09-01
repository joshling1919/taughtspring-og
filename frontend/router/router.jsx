import React from 'react';
import { Router,
         Route,
         hashHistory,
         IndexRoute
       } from 'react-router';
import App from '../components/app';
import LoginContainer from '../components/auth/login_container';
import SignupContainer from '../components/auth/signup_container';
import LessonsIndexContainer from '../components/lessons/lessons_index_container';


class AppRouter extends React.Component {
  constructor() {
    super();
    this.routes = this.createRoutes();
  }

  createRoutes() {
    return (
      <Route path="/" component={ App }>
        <IndexRoute component = {LessonsIndexContainer} />
        <Route path="login" component={ LoginContainer } />
        <Route path="signup" component={ SignupContainer }/>
      </Route>
    );
  }

  render() {
    return(
      <Router history={ hashHistory }>
        {this.routes}
      </Router>
    );
  }
}

export default AppRouter;
