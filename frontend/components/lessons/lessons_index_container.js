import { connect } from 'react-redux';
import LessonsIndex from './lessons_index';


const mapStateToProps = state => ({
  lessonsIndex: state.lessonsIndex.lessonsIndex,
  isLoading: state.lessonsIndex.isLoading
});




export default connect(
  mapStateToProps, null
)(LessonsIndex);
