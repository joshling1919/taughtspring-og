import { receiveProfile,
         ProfileConstants
       } from '../actions/profile_actions';

import { getUser } from '../util/profile_api_util';

import { push } from 'react-router-redux';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveProfile(user));
  // const errorCallback = xhr => {
  //   const errors = xhr.responseJSON;
  //   dispatch(receiveErrors(errors));
  // };

  switch(action.type){
    case ProfileConstants.REQUEST_PROFILE:
      getUser(action.userId, successCallback);
      return next(action);
    case ProfileConstants.RECEIVE_PROFILE:
      dispatch(push(`/profiles/${getState().session.currentUser.id}`));
      return next(action);
    default:
      return next(action);
  }
};
