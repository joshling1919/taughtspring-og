import { LessonsConstants } from '../actions/lessons_actions';
import { merge, uniqueId } from 'lodash';
import { SectionConstants } from '../actions/section_actions';

const SingleLessonReducer = function(singleLessonState = {}, action){
  let singleLessonCopy = merge({}, singleLessonState);
  switch(action.type){
    case LessonsConstants.RECEIVE_LESSON:
    case LessonsConstants.RECEIVE_UPDATE_LESSON:
    case LessonsConstants.UPDATE_PICTURE:
      return action.lesson;
    case LessonsConstants.UPDATE_TITLE:
      return merge({}, singleLessonState, { title: action.title });
    case LessonsConstants.UPDATE_SUBJECT:
      return merge({}, singleLessonState, { subject: action.subject });
    case LessonsConstants.UPDATE_GRADE:
      return merge({}, singleLessonState, { grade: action.grade });
    case LessonsConstants.UPDATE_DATE:
      return merge({}, singleLessonState, { lesson_date: action.date });
    case LessonsConstants.UPDATE_OBJECTIVE:
      singleLessonCopy.objectives[action.index].description = action.description;
      return merge({}, singleLessonState, singleLessonCopy);
    case LessonsConstants.UPDATE_KEY_POINT:
      singleLessonCopy.key_points[action.index].point = action.point;
      return merge({}, singleLessonState, singleLessonCopy);
    case SectionConstants.UPDATE_SECTION:
      singleLessonCopy.sections[action.index][action.sectionName] = action.sectionVal;
      return merge({}, singleLessonState, singleLessonCopy);
    default:
      return singleLessonState;
  }
};



export default SingleLessonReducer;
