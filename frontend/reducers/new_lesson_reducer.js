import { NewLessonConstants } from '../actions/new_lesson_actions';
import { merge } from 'lodash';


const NewLessonReducer = function(newLessonState = {}, action){
  switch(action.type){
    case NewLessonConstants.SAVE_ESSENTIALS:
      return merge({}, newLessonState, { essentials: action.essentials});
    default:
      return newLessonState;
  }
};



export default NewLessonReducer;
