import { connect } from 'react-redux';
import Login from './login';
import { loginAction, closeLogin } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  loginOpen: state.session.loginOpen
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginAction(user)),
  closeLogin: () => dispatch(closeLogin())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Login);
