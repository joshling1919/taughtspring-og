import React from 'react';


const DeleteSectionButton = ({ isSection, index,
  deletePart, sectionId }) => {
  if ( isSection || index !== 0 ) {
    return(
      <button type="button" id={index} name={sectionId}
        onClick={deletePart}
        className="delete-section">Delete Section
        </button>
    );
  } else {
    return null;
  }
};


export default DeleteSectionButton;
