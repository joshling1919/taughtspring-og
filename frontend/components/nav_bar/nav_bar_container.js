import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { logoutAction } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction())
});



export default connect(
  mapStateToProps, mapDispatchToProps
)(NavBar);
