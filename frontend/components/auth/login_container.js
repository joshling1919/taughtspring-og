import { connect } from 'react-redux';
import Login from './login';
import { loginAction, loginThunk } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginAction(user))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Login);
