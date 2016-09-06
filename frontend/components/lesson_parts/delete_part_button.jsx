import React from 'react';


const DeletePartButton = ({ index, deleteObjective }) => {
  if ( index !== 0 ) {
    return(
      <button type="button" id={index}
        onClick={deleteObjective}>Delete Objective</button>
    );
  } else {
    return null;
  }
};


export default DeletePartButton;
