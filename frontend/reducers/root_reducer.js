import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import LessonsReducer from './lessons_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  lessons: LessonsReducer
});

export default RootReducer;
