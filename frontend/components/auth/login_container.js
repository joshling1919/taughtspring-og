import { connect } from 'react-redux';
import Login from './login';
import { loginAction } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginAction(user))
});

export default connect(
  null, mapDispatchToProps
)(Login);
