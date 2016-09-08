import { FilterConstants } from '../actions/filter_actions';
import { merge } from 'lodash';


const FilterReducer = function(filteredState = [], action){
  switch(action.type){
    case FilterConstants.RECEIVE_FILTERED_LESSONS:
      return action.filteredLessons;
    default:
      return filteredState;
  }
};



export default FilterReducer;
