export const SectionConstants = {
  ADD_SECTION: "ADD_SECTION",
  DELETE_SECTION: "DELETE_SECTION",
  UPDATE_SECTION: "UPDATE_SECTION"
};

export const addSection = (lessonId, success) => ({
  type: SectionConstants.ADD_SECTION,
  lessonId
});

export const deleteSection = (sectionId, success) => ({
  type: SectionConstants.DELETE_SECTION,
  sectionId
});


export const updateSection = (sectionName, sectionVal,
  index, success) => ({
  type: SectionConstants.UPDATE_SECTION,
  sectionName,
  sectionVal,
  index
});
