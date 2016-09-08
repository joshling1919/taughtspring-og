export const fetchSearchedLessons = function(query, success) {
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data: {search: query},
    success
  });
};
