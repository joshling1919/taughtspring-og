import { LessonsConstants } from '../actions/lessons_actions';
import { merge } from 'lodash';

const defaultIndex = {
  isLoading: false,
  lessonsIndex: []
};

const LessonsIndexReducer = function(lessonsIndexState = defaultIndex, action){
  switch(action.type){
    case LessonsConstants.REQUEST_ALL_LESSONS:
      return merge({}, lessonsIndexState,
        { isLoading: true }
      );
    case LessonsConstants.RECEIVE_ALL_LESSONS:
      return merge({}, lessonsIndexState,
        { isLoading: false, lessonsIndex: action.allLessons}
      );
    default:
      return lessonsIndexState;
  }
};



export default LessonsIndexReducer;
