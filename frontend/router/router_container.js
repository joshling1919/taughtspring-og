import { connect } from 'react-redux';
import AppRouter from './router';
import { requestAllLessons, requestLesson } from '../actions/lessons_actions';
import { clearErrors } from '../actions/errors_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllLessons: () => dispatch(requestAllLessons()),
  requestLesson: lessonId => dispatch(requestLesson(lessonId)),
  clearErrors: () => dispatch(clearErrors())
});



export default connect(
  mapStateToProps, mapDispatchToProps
)(AppRouter);
