export const fetchFilteredLessons = function(subjectName, success) {
  $.ajax({
    method: 'GET',
    url: '/api/lessons',
    data: {subject: subjectName},
    success
  });
};
