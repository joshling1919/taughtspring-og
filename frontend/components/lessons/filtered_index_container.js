import { connect } from 'react-redux';
import LessonsIndex from './lessons_index';


const mapStateToProps = state => ({
  lessonsIndex: state.filteredIndex.filteredIndex,
  isLoading: state.filteredIndex.isLoading
});




export default connect(
  mapStateToProps, null
)(LessonsIndex);
