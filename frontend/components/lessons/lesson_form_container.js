import { connect } from 'react-redux';
import LessonForm from './lesson_form';

import { updateTitle,
         updateSubject,
         updateGrade,
         updateDate
       } from '../../actions/lessons_actions';

import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  updateTitle: title => dispatch(updateTitle(title)),
  updateSubject: subject => dispatch(updateSubject(subject)),
  updateGrade: grade => dispatch(updateGrade(grade)),
  updateDate: date => dispatch(updateDate(date))
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(LessonForm);
