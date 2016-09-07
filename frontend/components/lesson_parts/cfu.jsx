import React from 'react';

const CFU = ({ question, sectionIndex, cfuIndex,
  updateCFU, deleteCFU }) => {
  return (
    <div>
      <label>Question: </label>
      <input
        className="lesson-item"
        defaultValue={question}
        id={sectionIndex}
        name={cfuIndex}
        onBlur={updateCFU}
        type="text"/>
      <button type="button"
        id={sectionIndex}
        name={cfuIndex}
        onClick={deleteCFU}>Delete</button>
    </div>
  );
};

export default CFU;
