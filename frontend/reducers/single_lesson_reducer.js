import { LessonsConstants } from '../actions/lessons_actions';
import { merge } from 'lodash';


const SingleLessonReducer = function(singleLessonState = {}, action){
  switch(action.type){
    case LessonsConstants.RECEIVE_LESSON:
    case LessonsConstants.RECEIVE_UPDATE_LESSON:
    case LessonsConstants.UPDATE_PICTURE:
      return action.lesson;
    case LessonsConstants.UPDATE_TITLE:
      return merge({}, singleLessonState, { title: action.title });
    case LessonsConstants.UPDATE_SUBJECT:
      return merge({}, singleLessonState, { subject: action.subject });
    case LessonsConstants.UPDATE_GRADE:
      return merge({}, singleLessonState, { grade: action.grade });
    case LessonsConstants.UPDATE_DATE:
      return merge({}, singleLessonState, { lesson_date: action.date });
    default:
      return singleLessonState;
  }
};



export default SingleLessonReducer;
