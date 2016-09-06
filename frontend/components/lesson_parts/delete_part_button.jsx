import React from 'react';


const DeletePartButton = ({ isSection, index, deletePart }) => {
  if ( isSection || index !== 0 ) {
    return(
      <button type="button" id={index}
        onClick={deletePart}>Delete</button>
    );
  } else {
    return null;
  }
};


export default DeletePartButton;
