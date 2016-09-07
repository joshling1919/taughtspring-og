import { LessonsConstants,
         receiveAllLessons,
         receiveLesson,
         receiveUpdateLesson,
         requestLesson,
         confirmDelete
       } from '../actions/lessons_actions';

import { fetchAllLessons,
         createLesson,
         fetchLesson,
         updateLesson,
         deleteLesson,
         deleteObjective
       } from '../util/lessons_api_util';

import { requestProfile } from '../actions/profile_actions';

import { receiveErrors } from '../actions/errors_actions';


import { push } from 'react-router-redux';



export default ({ getState, dispatch }) => next => action => {
  let successSingleLesson = lesson => dispatch(receiveLesson(lesson));
  let successSingleUpdateLesson = lesson => dispatch(receiveUpdateLesson(lesson));
  let successUpdate = (obj) => dispatch(requestLesson(obj.lesson_id));
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
      deleteLesson(action.lessonId, ()=> dispatch(confirmDelete()));
      return next(action);
    case LessonsConstants.CONFIRM_DELETE:
      dispatch(requestProfile(getState().session.currentUser.id));
      return next(action);
    case LessonsConstants.DELETE_OBJECTIVE:
      deleteObjective(action.objectiveId, successUpdate);
      return next(action);
    default:
      return next(action);
  }
};
