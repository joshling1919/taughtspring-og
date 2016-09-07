import React from 'react';
import DeletePartButton from './delete_part_button';


const KeyPoint = ({ content, updateKeyPoints,
  index, deleteKeyPoint }) => {

  return(
    <div className="lesson-details group">
      <label>KeyPoint: </label>
      <input
        className="lesson-item title"
        id={index}
        name= "key_point"
        defaultValue={content}
        onChange={updateKeyPoints}
        type="text"/>
      <DeletePartButton index={index}
        deletePart={deleteKeyPoint} />
    </div>
  );
};

export default KeyPoint;
