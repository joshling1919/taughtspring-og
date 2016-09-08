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

// export const updateSection = function(section, success, error) {
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/sections/${section.section.id}`,
//     data: section,
//     success,
//     error
//   });
// };

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
