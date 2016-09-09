import { connect } from 'react-redux';
import LessonsIndex from './lessons_index';


const mapStateToProps = state => ({
  lessonsIndex: state.searchedIndex.searchedIndex,
  isLoading: state.searchedIndex.isLoading
});




export default connect(
  mapStateToProps, null
)(LessonsIndex);
