import React from 'react';



const Objective = ({ content }) => {

  return(
    <div className="lesson-details group">
      <label>Objective: </label>
      <input
        className="lesson-item title"
        name= "objective"
        defaultValue={content}
        type="text"/>
    </div>
  );
};

export default Objective;
