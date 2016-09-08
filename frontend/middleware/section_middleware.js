import { requestLesson,
       } from '../actions/lessons_actions';

import { SectionConstants
} from '../actions/section_actions';

import { createSection
       } from '../util/sections_api_util';





export default ({ getState, dispatch }) => next => action => {
  let successUpdate = (obj) => dispatch(requestLesson(obj.lesson_id));

  switch(action.type){
    case SectionConstants.ADD_SECTION:
      let blankSection = { section:
        {
          lesson_id: action.lessonId,
          name: "",
          description: ""
        }
      };
      createSection(blankSection, successUpdate);
      return next(action);
    default:
      return next(action);
  }
};
