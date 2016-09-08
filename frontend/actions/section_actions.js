export const SectionConstants = {
  ADD_SECTION: "ADD_SECTION"
};

export const addSection = (lessonId, success) => ({
  type: SectionConstants.ADD_SECTION,
  lessonId
});
