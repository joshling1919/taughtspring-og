import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { logoutAction,
         openLogin,
         openSignup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
  openLogin: () => dispatch(openLogin()),
  openSignup: () => dispatch(openSignup())
});



export default connect(
  mapStateToProps, mapDispatchToProps
)(NavBar);
