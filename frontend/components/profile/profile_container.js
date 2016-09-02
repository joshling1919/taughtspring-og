import { connect } from 'react-redux';
import Profile from './profile';
// import {
//        } from '../../actions/lessons_actions';


const mapStateToProps = state => ({
  profile: state.profile,
  currentUser: state.session.currentUser
});


// const mapDispatchToProps = dispatch => ({
//   requestLesson: lessonId => dispatch(requestLesson(lessonId)),
//   deleteLesson: lessonId => dispatch(deleteLesson(lessonId))
// });
//



export default connect(
  mapStateToProps
)(Profile);
