import React from 'react';

const EditLessonButton = ({ userId, redirectToEdit }, context) => {
  if (userId === context.currentUser.id ) {
    return(
      <button onClick={redirectToEdit}>Edit Lesson</button>
    );
  }else {
    return(
      <div className="not-owner"></div>
    );
  }
};

EditLessonButton.contextTypes = {
  currentUser: React.PropTypes.object
};

export default EditLessonButton;
