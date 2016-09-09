import React from 'react';

const EditDeleteLessonButtons = ({ userId,
  redirectToEdit, deleteLesson, currentUser, lessonUserId }, context) => {
  if ( currentUser && currentUser.id === lessonUserId) {

    return(
      <div>
        <button className="lesson-item form-submit lesson-show-buttons"
          onClick={redirectToEdit}>Edit Lesson</button>
        <button className="delete-lesson lesson-show-buttons"
          onClick={deleteLesson}>Delete Lesson</button>
      </div>
      );
  } else {
    return(
      <div className="not-owner"></div>
    );
  }
};

EditDeleteLessonButtons.contextTypes = {
  currentUser: React.PropTypes.object
};

export default EditDeleteLessonButtons;
