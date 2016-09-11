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
      let newSearchedState = {};
      newSearchedState.searchedIndex = action.searchedLessons;
      newSearchedState.isLoading = false;
      return newSearchedState;
    default:
      return searchedState;
  }
};



export default SearchReducer;
