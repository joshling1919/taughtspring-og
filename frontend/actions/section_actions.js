export const SectionConstants = {
  ADD_SECTION: "ADD_SECTION",
  DELETE_SECTION: "DELETE_SECTION"
};

export const addSection = (lessonId, success) => ({
  type: SectionConstants.ADD_SECTION,
  lessonId
});

export const deleteSection = (sectionId, success) => ({
  type: SectionConstants.DELETE_SECTION,
  sectionId
});
