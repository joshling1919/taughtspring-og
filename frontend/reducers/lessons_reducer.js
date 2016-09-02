import { LessonsConstants } from '../actions/lessons_actions';
import { merge } from 'lodash';


const LessonsReducer = function(lessonsState = {}, action){
  switch(action.type){
    case LessonsConstants.RECEIVE_ALL_LESSONS:
      return merge({}, lessonsState , { lessonsIndex: action.allLessons });
    case LessonsConstants.RECEIVE_LESSON:
    case LessonsConstants.RECEIVE_UPDATE_LESSON:
      return merge({}, lessonsState, { singleLesson: action.lesson });
    default:
      return lessonsState;
  }
};



export default LessonsReducer;
