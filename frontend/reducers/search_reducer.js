import { SearchConstants } from '../actions/search_actions';
import { merge } from 'lodash';

const defaultSearch = {
  isLoading: false,
  searchedIndex: []
};

const SearchReducer = function(searchedState = defaultSearch, action){
  switch(action.type){
    case SearchConstants.SEARCH:
      return merge({}, searchedState, { isLoading: true } );
    case SearchConstants.RECEIVE_SEARCHED_LESSONS:
      let newSearchedState = merge({}, searchedState, {
        searchedIndex: action.searchedLessons, isLoading: false }
      );
      if (action.searchedLessons.length === 0) {
        newSearchedState.searchedIndex = [];
      }
      return newSearchedState;
    default:
      return searchedState;
  }
};



export default SearchReducer;
