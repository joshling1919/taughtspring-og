export const SectionConstants = {
  ADD_SECTION: "ADD_SECTION",
  DELETE_SECTION: "DELETE_SECTION",
  UPDATE_SECTION: "UPDATE_SECTION",
  ADD_CFU: "ADD_CFU"
};

export const addSection = (lessonId, success) => ({
  type: SectionConstants.ADD_SECTION,
  lessonId
});

export const addCFU = (sectionId, success) => ({
  type: SectionConstants.ADD_CFU,
  sectionId
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
