import { connect } from 'react-redux';
import ObjectivesList from './objectives_list';

import { addObjective } from '../../actions/lessons_actions';



const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  objectives: state.singleLesson.objectives,
  singleLesson: state.singleLesson
});

const mapDispatchToProps = dispatch => ({
  addObjective: lessonId => dispatch(addObjective(lessonId))
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(ObjectivesList);
