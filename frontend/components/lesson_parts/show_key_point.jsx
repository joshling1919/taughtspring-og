import React from 'react';
import DeletePartButton from './delete_part_button';


const ShowKeyPoint = ({ content, updateKeyPoints,
  index, deleteKeyPoint }) => {

  return(
    <li className="lesson-details group">
      <label>KeyPoint: </label>
      <div className="lesson-item title">
        {content}
      </div>
    </li>
  );
};

export default ShowKeyPoint;
