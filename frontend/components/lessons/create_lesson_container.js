import { connect } from 'react-redux';
import CreateLesson from './create_lesson';

import { createLesson } from '../../actions/lessons_actions';



const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createLesson: lesson => dispatch(createLesson(lesson))
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(CreateLesson);
