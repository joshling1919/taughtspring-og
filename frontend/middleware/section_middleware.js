import { requestLesson,
       } from '../actions/lessons_actions';

import { SectionConstants
} from '../actions/section_actions';

import { createSection,
         deleteSection,
         createCFU
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
    case SectionConstants.ADD_CFU:
      let blankCFU = { cfu:
        {
          section_id: action.sectionId,
          question: "",
          answer: ""
        }
      };
      createCFU(blankCFU, successUpdate);
      return next(action);
    case SectionConstants.DELETE_SECTION:
      deleteSection(action.sectionId, successUpdate);
      return next(action);
    default:
      return next(action);
  }
};
