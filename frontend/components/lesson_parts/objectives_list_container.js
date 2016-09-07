import { connect } from 'react-redux';
import ObjectivesList from './objectives_list';



const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  objectives: state.singleLesson.objectives
});

// const mapDispatchToProps = dispatch => ({
//   updateObjectives: objectives => dispatch(updateObjectives(objectives))
// });


export default connect(
  mapStateToProps, null
)(ObjectivesList);
