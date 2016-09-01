import { LessonsConstants,
         receiveAllLessons,
         receiveLesson
       } from '../actions/lessons_actions';

import { fetchAllLessons,
         createLesson
       } from '../util/lessons_api_util';



export default ({ getState, dispatch }) => next => action => {
  let successSingleLesson = lesson => dispatch(receiveLesson(lesson));
  let successAllLessons = allLessons => dispatch(receiveAllLessons(allLessons));
  let tempError = (errors) => { console.log(errors);};
  switch(action.type){
    case LessonsConstants.REQUEST_ALL_LESSONS:
      fetchAllLessons(successAllLessons);
      return next(action);
    case LessonsConstants.CREATE_LESSON:
      createLesson(action.lesson, successSingleLesson, tempError);
      return next(action);
    default:
      return next(action);
  }
};
