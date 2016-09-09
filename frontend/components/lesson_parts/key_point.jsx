import React from 'react';
import DeletePartButton from './delete_part_button';


const KeyPoint = ({ content, updateKeyPoints,
  index, deleteKeyPoint }) => {

  return(
    <div className="lesson-details group">
      <textarea
        className="lesson-item textarea-field"
        id={index}
        name= "key_point"
        defaultValue={content}
        onChange={updateKeyPoints}
        />
      <DeletePartButton index={index}
        deletePart={deleteKeyPoint} />
    </div>
  );
};

export default KeyPoint;
