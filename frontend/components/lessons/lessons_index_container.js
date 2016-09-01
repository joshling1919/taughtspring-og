import { connect } from 'react-redux';
import LessonsIndex from './lessons_index';

import { requestAllLessons } from '../../actions/lessons_actions';

const mapStateToProps = state => ({
  lessonsIndex: state.lessons.lessonsIndex
});


const mapDispatchToProps = dispatch => ({
  requestAllLessons: () => dispatch(requestAllLessons())
});



export default connect(
  mapStateToProps, mapDispatchToProps
)(LessonsIndex);
