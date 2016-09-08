import { SearchConstants } from '../actions/search_actions';
import { merge } from 'lodash';


const SearchReducer = function(searchedState = [], action){
  switch(action.type){
    case SearchConstants.RECEIVE_SEARCHED_LESSONS:
      return action.searchedLessons;
    default:
      return searchedState;
  }
};



export default SearchReducer;
