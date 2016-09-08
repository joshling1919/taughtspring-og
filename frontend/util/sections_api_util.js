export const createSection = function(section, success) {
  $.ajax({
    method: 'POST',
    url: '/api/sections',
    data: section,
    success,
    error: () => {
      console.log('adding blank section error');
    }
  });
};

export const createCFU = function(CFU, success) {
  $.ajax({
    method: 'POST',
    url: '/api/cfus',
    data: CFU,
    success,
    error: () => {
      console.log('adding blank section error');
    }
  });
};



export const deleteSection = function(sectionId, success) {
  $.ajax({
    method: 'DELETE',
    url: `/api/sections/${sectionId}`,
    success,
    error: () => {
      console.log('Deleting Error');
    }
  });
};
