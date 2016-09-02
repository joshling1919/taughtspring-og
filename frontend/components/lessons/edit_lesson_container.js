import { connect } from 'react-redux';
import EditLesson from './lesson_form';

import { updateLesson } from '../../actions/lessons_actions';



const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createLesson: lesson => dispatch(updateLesson(lesson))
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(EditLesson);
