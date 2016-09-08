import { connect } from 'react-redux';
import CreateLesson from './create_lesson';


import { clearErrors } from '../../actions/errors_actions';


import { updateLesson,
        requestLesson,
        updatePicture
       } from '../../actions/lessons_actions';





const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  selectedLesson: state.singleLesson
});

const mapDispatchToProps = dispatch => ({
  updateLesson: lesson => dispatch(updateLesson(lesson)),
  requestLesson: lessonId => dispatch(requestLesson(lessonId)),
  updatePicture: lesson => dispatch(updatePicture(lesson)),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(CreateLesson);
