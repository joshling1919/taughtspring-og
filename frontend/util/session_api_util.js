export const login = function(user, success, error) {
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user,
    success,
    error
  });
};

export const logout = function(success) {
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
    success,
    error: () => {
      console.log('Logout error');
    }
  });
};
export const signup = function(user, success, error) {
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user,
    success,
    error
  });
};
