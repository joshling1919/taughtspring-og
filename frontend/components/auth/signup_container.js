import { connect } from 'react-redux';
import Signup from './signup';
import { signupAction } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupAction(user))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Signup);
