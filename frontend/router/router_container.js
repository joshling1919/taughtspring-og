import { connect } from 'react-redux';
import AppRouter from './router';
import { requestAllLessons,
         requestUpdateLesson
       } from '../actions/lessons_actions';

import { requestProfile } from '../actions/profile_actions';
import { clearErrors } from '../actions/errors_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllLessons: () => dispatch(requestAllLessons()),
  requestLesson: lessonId => dispatch(requestUpdateLesson(lessonId)),
  requestProfile: userId => dispatch(requestProfile(userId)),
  clearErrors: () => dispatch(clearErrors())
});



export default connect(
  mapStateToProps, mapDispatchToProps
)(AppRouter);
