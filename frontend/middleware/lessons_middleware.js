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
         deleteObjective,
         createObjective,
         deleteKeyPoint,
         createKeyPoint
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
      // dispatch(push(`/lessons/${action.lesson.id}`));
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
    case LessonsConstants.ADD_OBJECTIVE:
      let blankLesson = { objective:
        {lesson_id: action.lessonId, description: ""}
      };
      createObjective(blankLesson, successUpdate);
      return next(action);
    case LessonsConstants.DELETE_KEY_POINT:
      deleteKeyPoint(action.keyPointId, successUpdate);
      return next(action);
    case LessonsConstants.ADD_KEY_POINT:
      let blankKeyPoint = { key_point:
        {lesson_id: action.lessonId, point: ""}
      };
      createKeyPoint(blankKeyPoint, successUpdate);
      return next(action);
    default:
      return next(action);
  }
};
