import { LessonsConstants } from '../actions/lessons_actions';
import { merge } from 'lodash';


const LessonsReducer = function(lessonsState = {}, action){
  switch(action.type){
    case LessonsConstants.RECEIVE_ALL_LESSONS:
      return merge({}, lessonsState , { LessonsIndex: action.allLessons });
    default:
      return lessonsState;
  }
};



export default LessonsReducer;
