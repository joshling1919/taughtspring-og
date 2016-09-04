import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
  currentUser: null,
  loginOpen: false,
  signupOpen: false
});

const SessionReducer = function(sessionState = _nullUser, action){
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case SessionConstants.LOGOUT:
      return _nullUser;
    case SessionConstants.OPEN_LOGIN:
      return merge({}, sessionState, { loginOpen: true });
    case SessionConstants.CLOSE_LOGIN:
      return merge({}, sessionState, { loginOpen: false });
    case SessionConstants.OPEN_SIGNUP:
      return merge({}, sessionState, { signupOpen: true });
    case SessionConstants.CLOSE_SIGNUP:
      return merge({}, sessionState, { signupOpen: false });
    default:
      return sessionState;
  }
};



export default SessionReducer;
