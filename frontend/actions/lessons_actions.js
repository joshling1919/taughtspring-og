export const LessonsConstants = {
  REQUEST_LESSON: "REQUEST_LESSON",
  RECEIVE_ALL_LESSONS: "RECEIVE_ALL_LESSONS",
  REQUEST_ALL_LESSONS: "REQUEST_ALL_LESSONS",
  RECEIVE_LESSON: "RECEIVE_LESSON",
  CREATE_LESSON: "CREATE_LESSON",
  UPDATE_LESSON: "UPDATE_LESSON",
  REQUEST_UPDATE_LESSON: "REQUEST_UPDATE_LESSON",
  RECEIVE_UPDATE_LESSON: "RECEIVE_UPDATE_LESSON",
  DELETE_LESSON: "DELETE_LESSON",
  CONFIRM_DELETE: "CONFIRM_DELETE",
  UPDATE_PICTURE: "UPDATE_PICTURE",
  UPDATE_TITLE: "UPDATE_TITLE",
  UPDATE_SUBJECT: "UPDATE_SUBJECT",
  UPDATE_GRADE: "UPDATE_GRADE",
  UPDATE_DATE: "UPDATE_DATE",
  ROUTE_INDEX: "ROUTE_INDEX"
};

export const routeIndex = () => ({
  type: LessonsConstants.ROUTE_INDEX
});

export const requestAllLessons = () => ({
  type: LessonsConstants.REQUEST_ALL_LESSONS
});

export const requestLesson = lessonId => ({
  type: LessonsConstants.REQUEST_LESSON,
  lessonId
});

export const deleteLesson = lessonId => ({
  type: LessonsConstants.DELETE_LESSON,
  lessonId
});

export const requestUpdateLesson = lessonId => ({
  type: LessonsConstants.REQUEST_UPDATE_LESSON,
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

export const receiveUpdateLesson = lesson => ({
  type: LessonsConstants.RECEIVE_UPDATE_LESSON,
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

export const updatePicture = lesson => ({
  type: LessonsConstants.UPDATE_PICTURE,
  lesson
});

export const confirmDelete = () => ({
  type: LessonsConstants.CONFIRM_DELETE
});

export const updateTitle = title => ({
  type: LessonsConstants.UPDATE_TITLE,
  title
});

export const updateSubject = subject => ({
  type: LessonsConstants.UPDATE_SUBJECT,
  subject
});

export const updateGrade = grade => ({
  type: LessonsConstants.UPDATE_GRADE,
  grade
});

export const updateDate = date => ({
  type: LessonsConstants.UPDATE_DATE,
  date
});
