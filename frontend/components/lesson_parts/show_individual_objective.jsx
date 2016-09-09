import React from 'react';
import DeletePartButton from './delete_part_button';



const ShowIndividualObjective = ({ content, updateObjectives,
  index, deleteObjective }) => {

  return(
    <li className="lesson-details group">
      <label>Objective: </label>
      <div className="lesson-item title" >
        {content}
      </div>
    </li>
  );
};

export default ShowIndividualObjective;
