import React from 'react';

const CFU = ({ question, answer, sectionIndex, cfuIndex,
  updateCFU, deleteCFU }) => {
  return (
    <div>
        <label>Question: </label>
        <input
          className="questioncfu"
          defaultValue={question}
          id={sectionIndex}
          name={cfuIndex}
          onBlur={updateCFU}
          type="text"/>
        <label>Answer: </label>
        <input
          className="answercfu"
          defaultValue={answer}
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
