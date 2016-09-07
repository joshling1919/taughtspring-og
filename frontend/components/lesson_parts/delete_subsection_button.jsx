import React from 'react';


const DeleteSubsectionButton = ({ index, subIndex, deletePart }) => {
    return(
      <button type="button" id={index} name={subIndex}
        onClick={deletePart}>Delete</button>
    );
};


export default DeleteSubsectionButton;
