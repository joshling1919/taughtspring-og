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
      let newRequestLesson = {};
      newRequestLesson.lesson = singleLessonState.lesson;
      newRequestLesson.isLoading = true;
      return newRequestLesson;
    case LessonsConstants.RECEIVE_LESSON:
    case LessonsConstants.RECEIVE_UPDATE_LESSON:
    case LessonsConstants.UPDATE_PICTURE:
      let newSingleLesson = {};
      newSingleLesson.lesson = action.lesson;
      newSingleLesson.isLoading = false;
      return newSingleLesson;
    default:
      return singleLessonState;
  }
};



export default SingleLessonReducer;
