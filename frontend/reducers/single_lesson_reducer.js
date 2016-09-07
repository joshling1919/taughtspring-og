import { LessonsConstants } from '../actions/lessons_actions';
import { merge } from 'lodash';


const SingleLessonReducer = function(singleLessonState = {}, action){
  switch(action.type){
    case LessonsConstants.RECEIVE_LESSON:
    case LessonsConstants.RECEIVE_UPDATE_LESSON:
      return action.lesson;
    case LessonsConstants.UPDATE_PICTURE:
      return action.lesson;
    case LessonsConstants.UPDATE_TITLE:
      return merge({}, singleLessonState, { title: action.title });
    default:
      return singleLessonState;
  }
};



export default SingleLessonReducer;
