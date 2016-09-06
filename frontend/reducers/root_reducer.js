import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import LessonsReducer from './lessons_reducer';
import ErrorsReducer from './errors_reducer';
import ProfileReducer from './profile_reducer';
import NewLessonReducer from './new_lesson_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  session: SessionReducer,
  lessons: LessonsReducer,
  newLesson: NewLessonReducer,
  profile: ProfileReducer
});

export default RootReducer;
