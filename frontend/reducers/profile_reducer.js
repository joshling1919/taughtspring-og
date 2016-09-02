import { ProfileConstants } from '../actions/profile_actions';
import { merge } from 'lodash';


const ProfileReducer = function(profileState = {}, action){
  switch(action.type){
    case ProfileConstants.RECEIVE_PROFILE:
      return action.user;
    default:
      return profileState;
  }
};



export default ProfileReducer;
