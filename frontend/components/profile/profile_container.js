import { connect } from 'react-redux';
import Profile from './profile';
import { deleteLesson
       } from '../../actions/lessons_actions';


const mapStateToProps = state => ({
  profile: state.profile,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  deleteLesson: lessonId => dispatch(deleteLesson(lessonId))
});




export default connect(
  mapStateToProps, mapDispatchToProps
)(Profile);
