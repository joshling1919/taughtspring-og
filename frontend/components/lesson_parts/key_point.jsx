import React from 'react';



const KeyPoint = ({ content, updateKeyPoints, index }) => {

  return(
    <div className="lesson-details group">
      <label>KeyPoint: </label>
      <input
        className="lesson-item title"
        id={index}
        name= "key_point"
        defaultValue={content}
        onBlur={updateKeyPoints}
        type="text"/>
    </div>
  );
};

export default KeyPoint;
