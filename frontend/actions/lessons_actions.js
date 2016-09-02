export const LessonsConstants = {
  REQUEST_LESSON: "REQUEST_LESSON",
  RECEIVE_ALL_LESSONS: "RECEIVE_ALL_LESSONS",
  REQUEST_ALL_LESSONS: "REQUEST_ALL_LESSONS",
  RECEIVE_LESSON: "RECEIVE_LESSON",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CREATE_LESSON: "CREATE_LESSON",
  UPDATE_LESSON: "UPDATE_LESSON"
};

export const requestAllLessons = () => ({
  type: LessonsConstants.REQUEST_ALL_LESSONS
});

export const requestLesson = lessonId => ({
  type: LessonsConstants.REQUEST_LESSON,
  lessonId
});

export const receiveAllLessons = allLessons => ({
  type: LessonsConstants.RECEIVE_ALL_LESSONS,
  allLessons
});

export const receiveLesson = lesson => ({
  type: LessonsConstants.RECEIVE_LESSON,
  lesson
});

export const createLesson = lesson => ({
  type: LessonsConstants.CREATE_LESSON,
  lesson
});

export const updateLesson = lesson => ({
  type: LessonsConstants.UPDATE_LESSON,
  lesson
});

//refactor out soon
export const receiveErrors = errors => ({
  type: LessonsConstants.RECEIVE_ERRORS,
  errors
});