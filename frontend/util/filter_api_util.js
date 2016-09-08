export const fetchFilteredLessons = function(subject, success) {
  $.ajax({
    method: 'GET',
    url: '/api/lessons',
    data: subject,
    success
  });
};
