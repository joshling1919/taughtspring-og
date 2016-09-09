import React from 'react';

const ShowCFU = ({ question, answer, sectionIndex, cfuIndex,
  updateCFU, deleteCFU }) => {
  return (
    <li>
        <label>Question: </label>
        <div className="questioncfu">
          {question}
        </div>
        <label>Answer: </label>
        <div className="answercfu">
          {answer}
        </div>
    </li>
  );
};

export default ShowCFU;
