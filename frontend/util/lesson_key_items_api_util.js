export const createObjective = function(objective, success, error) {
  $.ajax({
    method: 'POST',
    url: '/api/objectives',
    data: objective,
    success,
    error
  });
};

export const createKeyPoint = function(keyPoint, success, error) {
  $.ajax({
    method: 'POST',
    url: '/api/key_points',
    data: keyPoint,
    success,
    error
  });
};
