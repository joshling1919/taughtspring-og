import { connect } from 'react-redux';
import LessonsIndex from './lessons_index';


const mapStateToProps = state => ({
  lessonsIndex: state.lessonsIndex
});




export default connect(
  mapStateToProps, null
)(LessonsIndex);
