import React from 'react';
import DeletePartButton from './delete_part_button';



const Objective = ({ content, updateObjectives,
  index, deleteObjective }) => {

  return(
    <div className="lesson-details group">
      <textarea
        className="lesson-item textarea-field"
        id={index}
        name= "objective"
        defaultValue={content}
        onChange={updateObjectives}
        />
      <DeletePartButton index={index}
        deletePart={deleteObjective} />
    </div>
  );
};

export default Objective;
