import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import LessonsReducer from './lessons_reducer';
import ErrorsReducer from './errors_reducer';
import ProfileReducer from './profile_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  lessons: LessonsReducer,
  errors: ErrorsReducer,
  profile: ProfileReducer
});

export default RootReducer;
