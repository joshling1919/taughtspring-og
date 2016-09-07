import { connect } from 'react-redux';
import EditKeyPoint from './edit_key_point';

import { updateKeyPoint,
         deleteKeyPoint
       } from '../../actions/lessons_actions';



const mapDispatchToProps = dispatch => ({
  updateKeyPoint: (index, point) => dispatch(updateKeyPoint(index, point)),
  deleteKeyPoint: keyPointId => dispatch(deleteKeyPoint(keyPointId))
});


export default connect(
  null, mapDispatchToProps
)(EditKeyPoint);
