import React from 'react';



const Objective = ({ content, updateObjectives, index }) => {

  return(
    <div className="lesson-details group">
      <label>Objective: </label>
      <input
        className="lesson-item title"
        id={index}
        name= "objective"
        defaultValue={content}
        onBlur={updateObjectives}
        type="text"/>
    </div>
  );
};

export default Objective;
