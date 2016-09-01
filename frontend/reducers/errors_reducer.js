import { ErrorConstants } from '../actions/errors_actions';


const ErrorsReducer = function(errorsState = [], action){
  switch(action.type){
    case ErrorConstants.RECEIVE_ERRORS:
      return action.errors;
    case ErrorConstants.CLEAR_ERRORS:
      return [];
    default:
      return errorsState;
  }
};



export default ErrorsReducer;
