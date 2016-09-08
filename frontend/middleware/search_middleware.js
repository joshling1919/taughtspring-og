import { receiveSearchedLessons,
         search,
         SearchConstants
} from '../actions/search_actions';


import { fetchSearchedLessons } from '../util/search_api_util';


export default ({ getState, dispatch }) => next => action => {
  let successSearchedLessons = searchedLessons => dispatch(
    receiveSearchedLessons(searchedLessons));

  switch(action.type){
    case SearchConstants.SEARCH:
      fetchSearchedLessons(action.query, successSearchedLessons);
      return next(action);
    default:
      return next(action);
  }
};
