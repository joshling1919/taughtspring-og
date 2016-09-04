import { connect } from 'react-redux';
import Signup from './signup';
import { signupAction, closeSignup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  signupOpen: state.session.signupOpen
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupAction(user)),
  closeSignup: () => dispatch(closeSignup()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Signup);
