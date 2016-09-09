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
      createLesson(action.lesson, successSingleUpdateLesson, errorCallback);
      return next(action);
    case LessonsConstants.REQUEST_LESSON:
      fetchLesson(action.lessonId, successSingleLesson);
      return next(action);
    case LessonsConstants.REQUEST_UPDATE_LESSON:
      fetchLesson(action.lessonId, successSingleUpdateLesson);
      return next(action);
    case LessonsConstants.UPDATE_LESSON:
    action.lesson.lesson.sections.forEach( section => {
      section.cfus_attributes = section.cfus;
      section.misconceptions_attributes = section.misconceptions;
    });
    let nestedLesson = { lesson: {
        deleted_objectives: action.lesson.lesson.deletedObjectives,
        deleted_key_points: action.lesson.lesson.deletedKeyPoints,
        deleted_sections: action.lesson.lesson.deletedSections,
        deleted_cfus: action.lesson.lesson.deletedCFUs,
        deleted_misconceptions: action.lesson.lesson.deletedMisconceptions,
        id: action.lesson.lesson.id,
        title: action.lesson.lesson.title,
        grade: action.lesson.lesson.grade,
        subject: action.lesson.lesson.subject,
        lesson_date: action.lesson.lesson.lesson_date,
        user_id: action.lesson.lesson.user_id,
        objectives_attributes: action.lesson.lesson.objectives,
        key_points_attributes: action.lesson.lesson.key_points,
        sections_attributes: action.lesson.lesson.sections
      }
    };
      updateLesson(nestedLesson, successSingleLesson, errorCallback);
      return next(action);
    case LessonsConstants.RECEIVE_LESSON:
      return next(action);
    case LessonsConstants.RECEIVE_UPDATE_LESSON:
      // dispatch(push(`/lessons/${action.lesson.id}`));
      return next(action);
    case LessonsConstants.DELETE_LESSON:
      deleteLesson(action.lessonId, ()=> dispatch(confirmDelete()));
      return next(action);
    case LessonsConstants.CONFIRM_DELETE:
      dispatch(requestProfile(getState().session.currentUser.id));
      return next(action);
    case LessonsConstants.ROUTE_INDEX:
      dispatch(push('/'));
      return next(action);
    default:
      return next(action);
  }
};
