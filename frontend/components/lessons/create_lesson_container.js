import { connect } from 'react-redux';
import LessonForm from './lesson_form';

import { createLesson } from '../../actions/lessons_actions';

import { clearErrors } from '../../actions/errors_actions';


const selectedLesson = {

};
const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  selectedLesson

});

const mapDispatchToProps = dispatch => ({
  createLesson: lesson => dispatch(createLesson(lesson)),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(LessonForm);
