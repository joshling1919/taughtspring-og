import { connect } from 'react-redux';
import LessonTemplate from './lesson_template';

import { createLesson } from '../../actions/lessons_actions';

import { clearErrors } from '../../actions/errors_actions';



const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  selectedLesson: {
    image_url:"http://www.nationofchange.org/wp-content/uploads/2016/05/education.jpg",
    thumbnail_url: "",
    title: "",
    grade: state.session.currentUser.grade,
    subject: state.session.currentUser.subject,
    lesson_date: undefined,
    user_id: state.session.currentUser.id,
    objectives: [{ description: "", uniq: 50123 }],
    key_points: [{ point: "", uniq: 94532 }],
    sections: [{ name: "", description: "",
    misconceptions: [], cfus: [], uniq: 2 }]
  }
});

const mapDispatchToProps = dispatch => ({
  submitLesson: lesson => dispatch(createLesson(lesson)),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(LessonTemplate);
