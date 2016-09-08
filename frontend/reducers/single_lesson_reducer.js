import { LessonsConstants } from '../actions/lessons_actions';
import { merge, uniqueId } from 'lodash';


const SingleLessonReducer = function(singleLessonState = {}, action){
  let singleLessonCopy = merge({}, singleLessonState);
  switch(action.type){
    case LessonsConstants.RECEIVE_LESSON:
    case LessonsConstants.RECEIVE_UPDATE_LESSON:
    case LessonsConstants.UPDATE_PICTURE:
      return action.lesson;
    default:
      return singleLessonState;
  }
};



export default SingleLessonReducer;
