import { LessonsConstants } from '../actions/lessons_actions';
import { merge } from 'lodash';


const LessonsIndexReducer = function(lessonsIndexState = [], action){
  switch(action.type){
    case LessonsConstants.RECEIVE_ALL_LESSONS:
      return action.allLessons;
    default:
      return lessonsIndexState;
  }
};



export default LessonsIndexReducer;
