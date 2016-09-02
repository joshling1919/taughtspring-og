import { connect } from 'react-redux';
import Profile from './profile';
import { requestLesson,
         deleteLesson
       } from '../../actions/lessons_actions';


const mapStateToProps = state => ({
  singleLesson: state.lessons.singleLesson,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  requestLesson: lessonId => dispatch(requestLesson(lessonId)),
  deleteLesson: lessonId => dispatch(deleteLesson(lessonId))
});




export default connect(
  mapStateToProps, mapDispatchToProps
)(Profile);
