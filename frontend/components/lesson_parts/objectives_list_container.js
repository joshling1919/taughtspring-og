import { connect } from 'react-redux';
import ObjectivesList from './objectives_list';

import { updateObjectives
       } from '../../actions/lessons_actions';

import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  singleLesson: state.singleLesson
});

const mapDispatchToProps = dispatch => ({
  updateObjectives: objectives => dispatch(updateObjectives(objectives))
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(ObjectivesList);
