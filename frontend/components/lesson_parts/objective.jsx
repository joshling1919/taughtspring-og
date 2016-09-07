import React from 'react';
import DeletePartButton from './delete_part_button';



const Objective = ({ content, updateObjectives,
  index, deleteObjective }) => {

  return(
    <div className="lesson-details group">
      <label>Objective: </label>
      <input
        className="lesson-item title"
        id={index}
        name= "objective"
        defaultValue={content}
        onChange={updateObjectives}
        type="text"/>
      <DeletePartButton index={index}
        deletePart={deleteObjective} />
    </div>
  );
};

export default Objective;
