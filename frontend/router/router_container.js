import { connect } from 'react-redux';
import AppRouter from './router';
import { requestAllLessons,
         requestUpdateLesson
       } from '../actions/lessons_actions';

import { requestProfile } from '../actions/profile_actions';
import { findSubject } from '../actions/filter_actions';
import { clearErrors } from '../actions/errors_actions';
import { openLogin } from '../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllLessons: () => dispatch(requestAllLessons()),
  requestLesson: lessonId => dispatch(requestUpdateLesson(lessonId)),
  requestProfile: userId => dispatch(requestProfile(userId)),
  clearErrors: () => dispatch(clearErrors()),
  openLogin: () => dispatch(openLogin()),
  findSubject: subject => dispatch(findSubject(subject))
});



export default connect(
  mapStateToProps, mapDispatchToProps
)(AppRouter);
