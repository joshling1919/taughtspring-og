import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
  currentUser: null,
  modal_open: false
});

const SessionReducer = function(sessionState = _nullUser, action){
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case SessionConstants.LOGOUT:
      return _nullUser;
    default:
      return sessionState;
  }
};



export default SessionReducer;
