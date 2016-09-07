import { connect } from 'react-redux';
import KeyPointsList from './key_points_list';

import { addKeyPoint } from '../../actions/lessons_actions';



const mapStateToProps = state => ({
  keyPoints: state.singleLesson.key_points,
  singleLesson: state.singleLesson
});

const mapDispatchToProps = dispatch => ({
  addKeyPoint: lessonId => dispatch(addKeyPoint(lessonId))
});


export default connect(
  mapStateToProps, mapDispatchToProps
)(KeyPointsList);
