import { connect } from 'react-redux';
import EditLesson from './edit_lesson';

import { updateLesson, requestLesson, updatePicture } from '../../actions/lessons_actions';



const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  singleLesson: state.lessons.singleLesson
});

const mapDispatchToProps = dispatch => ({
  updateLesson: lesson => dispatch(updateLesson(lesson)),
  requestLesson: lessonId => dispatch(requestLesson(lessonId)),
  updatePicture: lesson => dispatch(updatePicture(lesson))
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(EditLesson);
