import { connect } from 'react-redux';
import LessonForm from './lesson_form';

import { updateTitle } from '../../actions/lessons_actions';

import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  updateTitle: title => dispatch(clearErrors())
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(LessonForm);
