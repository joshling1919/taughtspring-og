import { connect } from 'react-redux';
import LessonTemplate from './lesson_template';


import { clearErrors } from '../../actions/errors_actions';


import { updateLesson,
        requestLesson,
        updatePicture
       } from '../../actions/lessons_actions';





const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  selectedLesson: state.singleLesson.lesson,
  isLoading: state.singleLesson.isLoading
});

const mapDispatchToProps = dispatch => ({
  submitLesson: lesson => dispatch(updateLesson(lesson)),
  requestLesson: lessonId => dispatch(requestLesson(lessonId)),
  updatePicture: lesson => dispatch(updatePicture(lesson)),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(LessonTemplate);
