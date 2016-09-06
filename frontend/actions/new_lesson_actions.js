export const NewLessonConstants = {
  SAVE_ESSENTIALS: "SAVE_ESSENTIALS",
  SAVE_OBJECTIVES: "SAVE_OBJECTIVES",
  SAVE_SECTIONS: "SAVE_SECTIONS"
};

export const saveEssentials = essentials => ({
  type: NewLessonConstants.SAVE_ESSENTIALS,
  essentials

});

export const saveObjectives = objectives => ({
  type: NewLessonConstants.SAVE_OBJECTIVES,
  objectives
});
