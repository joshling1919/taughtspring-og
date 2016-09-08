import { connect } from 'react-redux';
import EditLesson from './edit_lesson';

import { updateLesson,
        requestLesson,
        updatePicture
       } from '../../actions/lessons_actions';

import { addSection,
         deleteSection
      } from '../../actions/section_actions';




const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  singleLesson: state.singleLesson
});

const mapDispatchToProps = dispatch => ({
  updateLesson: lesson => dispatch(updateLesson(lesson)),
  requestLesson: lessonId => dispatch(requestLesson(lessonId)),
  updatePicture: lesson => dispatch(updatePicture(lesson)),
  addSection: lessonId => dispatch(addSection(lessonId)),
  deleteSection: sectionId => dispatch(deleteSection(sectionId))
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(EditLesson);
