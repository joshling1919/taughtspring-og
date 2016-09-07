import { connect } from 'react-redux';
import EditObjective from './edit_objective';

import { updateObjective } from '../../actions/lessons_actions';

// const mapStateToProps = state => ({
//   currentUser: state.session.currentUser,
//   objectives: state.singleLesson.objectives
// });

const mapDispatchToProps = dispatch => ({
  updateObjective: objective => dispatch(updateObjective(objective))
});


export default connect(
  null, mapDispatchToProps
)(EditObjective);
