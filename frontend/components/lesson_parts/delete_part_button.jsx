import React from 'react';


const DeletePartButton = ({ isSection, index,
  deletePart, sectionId }) => {
  if ( isSection || index !== 0 ) {
    return(
      <button type="button" id={index} name={sectionId}
        onClick={deletePart}>Delete</button>
    );
  } else {
    return null;
  }
};


export default DeletePartButton;
