import { connect } from 'react-redux';
import Signup from './signup';
import { signupAction,
         closeSignup,
         openLogin } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  signupOpen: state.session.signupOpen
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupAction(user)),
  closeSignup: () => dispatch(closeSignup()),
  openLogin: () => dispatch(openLogin())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Signup);
