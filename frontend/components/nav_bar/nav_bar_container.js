import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { logoutAction,
         openLogin,
         openSignup,
         closeLogin,
         closeSignup
       } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
  openLogin: () => dispatch(openLogin()),
  openSignup: () => dispatch(openSignup()),
  closeLogin: () => dispatch(closeLogin()),
  closeSignup: () => dispatch(closeSignup()),
  clearErrors: () => dispatch(clearErrors())
});



export default connect(
  mapStateToProps, mapDispatchToProps
)(NavBar);
