export const FilterConstants = {
  FIND_SUBJECT: "FIND_SUBJECT",
  RECEIVE_FILTERED_LESSONS: "RECEIVE_FILTERED_LESSONS"
};


export const findSubject = filter => ({
  type: FilterConstants.FIND_SUBJECT,
  filter
});

export const receiveFilteredLessons = filteredLessons => ({
  type: FilterConstants.RECEIVE_FILTERED_LESSONS,
  filteredLessons
});
