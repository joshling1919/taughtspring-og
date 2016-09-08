import { receiveFilteredLessons,
         findSubject,
         FilterConstants
} from '../actions/filter_actions';


import { fetchFilteredLessons } from '../util/filter_api_util';
import { receiveErrors } from '../actions/errors_actions';


export default ({ getState, dispatch }) => next => action => {
  let successFilteredLessons = filteredLessons => dispatch(
    receiveFilteredLessons(filteredLessons));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){
    case FilterConstants.FIND_SUBJECT:
      fetchFilteredLessons(action.subject, successFilteredLessons);
      return next(action);
    default:
      return next(action);
  }
};
