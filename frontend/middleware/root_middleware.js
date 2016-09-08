import { applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';
import { hashHistory } from 'react-router';

import SessionMiddleware from './session_middleware';
import LessonsMiddleware from './lessons_middleware';
import ProfileMiddleware from './profile_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  LessonsMiddleware,
  ProfileMiddleware,
  routerMiddleware(hashHistory)
);

export default RootMiddleware;
