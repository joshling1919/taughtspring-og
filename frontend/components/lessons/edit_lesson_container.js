import { connect } from 'react-redux';
import CreateLesson from './create_lesson';


import { clearErrors } from '../../actions/errors_actions';


import { updateLesson,
        requestLesson,
        updatePicture
       } from '../../actions/lessons_actions';

import { addSection,
         deleteSection,
         updateSection,
         addCFU
      } from '../../actions/section_actions';




const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  selectedLesson: state.singleLesson
});

const mapDispatchToProps = dispatch => ({
  updateLesson: lesson => dispatch(updateLesson(lesson)),
  requestLesson: lessonId => dispatch(requestLesson(lessonId)),
  updatePicture: lesson => dispatch(updatePicture(lesson)),
  addSection: lessonId => dispatch(addSection(lessonId)),
  deleteSection: sectionId => dispatch(deleteSection(sectionId)),
  updateSection: (sectionName, sectionVal,
     index) => dispatch(updateSection(sectionName, sectionVal, index)),
  addCFU: sectionId => dispatch(addCFU(sectionId)),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(CreateLesson);
