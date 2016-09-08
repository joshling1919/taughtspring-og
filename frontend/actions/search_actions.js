export const SearchConstants = {
  SEARCH: "SEARCH",
  RECEIVE_SEARCHED_LESSONS: "RECEIVE_SEARCHED_LESSONS"
};


export const search = query => ({
  type: SearchConstants.SEARCH,
  query
});

export const receiveSearchedLessons = searchedLessons => ({
  type: SearchConstants.RECEIVE_SEARCHED_LESSONS,
  searchedLessons
});
