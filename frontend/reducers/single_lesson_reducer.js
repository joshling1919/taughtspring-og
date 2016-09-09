import { LessonsConstants } from '../actions/lessons_actions';
import { merge, uniqueId } from 'lodash';


const defaultSingleLesson = {
  lesson: {},
  isLoading: false
};

const SingleLessonReducer = function(
  singleLessonState = defaultSingleLesson, action){
  let singleLessonCopy = merge({}, singleLessonState);
  switch(action.type){
    case LessonsConstants.REQUEST_UPDATE_LESSON:
      return merge({}, singleLessonState, { isLoading:true });
    case LessonsConstants.RECEIVE_LESSON:
    case LessonsConstants.RECEIVE_UPDATE_LESSON:
    case LessonsConstants.UPDATE_PICTURE:
      return merge({}, singleLessonState,
        { lesson: action.lesson, isLoading: false });
    default:
      return singleLessonState;
  }
};



export default SingleLessonReducer;
