import { LessonsConstants,
         receiveAllLessons
       } from '../actions/lessons_actions';

import { fetchAllLessons
       } from '../util/lessons_api_util';



export default ({ getState, dispatch }) => next => action => {
  let success;
  switch(action.type){
    case LessonsConstants.REQUEST_ALL_LESSONS:
      success = allLessons => dispatch(receiveAllLessons(allLessons));
      fetchAllLessons(success);
      return next(action);
    default:
      return next(action);
  }
};
