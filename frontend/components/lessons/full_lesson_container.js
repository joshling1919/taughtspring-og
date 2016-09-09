import { connect } from 'react-redux';
import FullLesson from './full_lesson';
import { requestLesson,
         deleteLesson
       } from '../../actions/lessons_actions';


const mapStateToProps = state => ({
  selectedLesson: state.singleLesson.lesson,
  currentUser: state.session.currentUser,
  errors: state.errors,
  isLoading: state.singleLesson.isLoading
});


const mapDispatchToProps = dispatch => ({
  requestLesson: lessonId => dispatch(requestLesson(lessonId)),
  deleteLesson: lessonId => dispatch(deleteLesson(lessonId))
});




export default connect(
  mapStateToProps, mapDispatchToProps
)(FullLesson);
