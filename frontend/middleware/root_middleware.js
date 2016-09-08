import { applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';
import { hashHistory } from 'react-router';

import SessionMiddleware from './session_middleware';
import LessonsMiddleware from './lessons_middleware';
import ProfileMiddleware from './profile_middleware';
import SectionMiddleware from './section_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  LessonsMiddleware,
  ProfileMiddleware,
  SectionMiddleware,
  routerMiddleware(hashHistory)
);

export default RootMiddleware;
