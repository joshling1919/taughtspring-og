import { FilterConstants } from '../actions/filter_actions';
import { merge } from 'lodash';

const defaultFilter = {
  isLoading: false,
  filteredIndex: []
};

const FilterReducer = function(filteredState = [], action){
  switch(action.type){
    case FilterConstants.FIND_SUBJECT:
      return merge({}, filteredState, {isLoading: true});
    case FilterConstants.RECEIVE_FILTERED_LESSONS:
    let newFilteredState = merge({}, filteredState, {
      filteredIndex: action.filteredLessons, isLoading: false }
    );
    if (action.filteredLessons.length === 0) {
      newFilteredState.filteredIndex = [];
    }
    return newFilteredState;
    default:
      return filteredState;
  }
};



export default FilterReducer;
