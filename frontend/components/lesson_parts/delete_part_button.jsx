import React from 'react';


const DeletePartButton = ({ isSection, index,
  deletePart, sectionId }) => {
  if ( isSection || index !== 0 ) {
    return(
      <button type="button" id={index} name={sectionId}
        onClick={deletePart}
        className="delete-part"><i
        id={index} className="fa fa-trash" aria-hidden="true"></i>
        </button>
    );
  } else {
    return null;
  }
};


export default DeletePartButton;
