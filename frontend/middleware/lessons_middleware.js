import { LessonsConstants,
         receiveAllLessons,
         receiveLesson,
         receiveUpdateLesson
       } from '../actions/lessons_actions';

import { fetchAllLessons,
         createLesson,
         fetchLesson,
         updateLesson,
         deleteLesson
       } from '../util/lessons_api_util';

import { receiveErrors } from '../actions/errors_actions';


import { push } from 'react-router-redux';



export default ({ getState, dispatch }) => next => action => {
  let successSingleLesson = lesson => dispatch(receiveLesson(lesson));
  let successSingleUpdateLesson = lesson => dispatch(receiveUpdateLesson(lesson));
  let successAllLessons = allLessons => dispatch(receiveAllLessons(allLessons));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){
    case LessonsConstants.REQUEST_ALL_LESSONS:
      fetchAllLessons(successAllLessons);
      return next(action);
    case LessonsConstants.CREATE_LESSON:
      createLesson(action.lesson, successSingleLesson, errorCallback);
      return next(action);
    case LessonsConstants.REQUEST_LESSON:
      fetchLesson(action.lessonId, successSingleLesson);
      return next(action);
    case LessonsConstants.REQUEST_UPDATE_LESSON:
      fetchLesson(action.lessonId, successSingleUpdateLesson);
      return next(action);
    case LessonsConstants.UPDATE_LESSON:
      updateLesson(action.lesson, successSingleLesson, errorCallback);
      return next(action);
    case LessonsConstants.RECEIVE_LESSON:
      dispatch(push(`/lessons/${action.lesson.id}`));
      return next(action);
    case LessonsConstants.DELETE_LESSON:
      deleteLesson(action.lessonId, successSingleLesson);
      return next(action);
    default:
      return next(action);
  }
};
