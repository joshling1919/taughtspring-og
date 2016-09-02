export const getUser  = function(userId, success) {
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`,
    success
  });
};
