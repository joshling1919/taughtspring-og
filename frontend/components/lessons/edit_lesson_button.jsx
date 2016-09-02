import React from 'react';

const EditDeleteLessonButtons = ({ userId, redirectToEdit, deleteLesson }, context) => {
  if (userId === context.currentUser.id ) {
    return(
      <div>
        <button onClick={redirectToEdit}>Edit Lesson</button>
        <button onClick={deleteLesson}>Delete Lesson</button>
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
