export const fetchFilteredLessons = function(filterFields, success) {
  $.ajax({
    method: 'GET',
    url: '/api/lessons',
    data: {filter: filterFields},
    success
  });
};
