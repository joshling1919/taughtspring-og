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
import CreateLessonContainer from '../components/lessons/create_lesson_container';
import FullLessonContainer from '../components/lessons/full_lesson_container';



class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this._populateIndex = this._populateIndex.bind(this);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._clearErrors = this._clearErrors.bind(this);
    this.routes = this.createRoutes.bind(this)();
  }

  _populateIndex(){
    this.props.requestAllLessons();
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _clearErrors(){
    this.props.clearErrors();
  }


  createRoutes() {
    return (
      <Route path="/" component={ App } >
        <IndexRoute component = { LessonsIndexContainer } onEnter={this._populateIndex} />
        <Route path="login" component={ LoginContainer } onLeave={this._clearErrors}/>
        <Route path="signup" component={ SignupContainer } onLeave={this._clearErrors}/>
        <Route path="create-lesson" component={ CreateLessonContainer } onEnter={ this._ensureLoggedIn }/>
        <Route path="lessons/:lessonId" component={ FullLessonContainer } >
        </Route>
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
