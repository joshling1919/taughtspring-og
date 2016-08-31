import { connect } from 'react-redux';
import Signup from './signup';
import { signupAction } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupAction(user))
});

export default connect(
  null, mapDispatchToProps
)(Signup);
