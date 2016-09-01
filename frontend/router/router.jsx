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
  constructor(props) {
    super(props);
    this._populateIndex = this._populateIndex.bind(this);
    this.routes = this.createRoutes.bind(this)();
  }

  _populateIndex(){
    this.props.requestAllLessons();
  }


  createRoutes() {
    return (
      <Route path="/" component={ App }>
        <IndexRoute component = { LessonsIndexContainer } onEnter={this._populateIndex} />
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
