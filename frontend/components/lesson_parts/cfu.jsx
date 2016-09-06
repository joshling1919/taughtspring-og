import React from 'react';

const CFU = ({ index }) => {
  return (
    <div>
      <label>Question: </label>
      <input
        className="lesson-item"
        name= "question"
        id={index}
        defaultValue={name}
        type="text"/>
      <label>Answer: </label>
      <input
        className="lesson-item"
        name= "answer"
        id={index}
        defaultValue={name}
        type="text"/>
    </div>
  );
};

export default CFU;
