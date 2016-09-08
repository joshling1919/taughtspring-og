export const FilterConstants = {
  FIND_SUBJECT: "FIND_SUBJECT",
  RECEIVE_FILTERED_LESSONS: "RECEIVE_FILTERED_LESSONS"
};


export const findSubject = subject => ({
  type: FilterConstants.FIND_SUBJECT,
  subject
});

export const receiveFilteredLessons = filteredLessons => ({
  type: FilterConstants.RECEIVE_FILTERED_LESSONS,
  filteredLessons
});
