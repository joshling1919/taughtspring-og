import { receiveCurrentUser,
         SessionConstants
       } from '../actions/session_actions';

import { receiveProfile } from '../actions/profile_actions';

import {  } from '../util/session_api_util';

import { push } from 'react-router-redux';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){
    case SessionConstants.LOGIN:
      requestProfile(action.userId, successCalback)
      return next(action);
    default:
      return next(action);
  }
};
