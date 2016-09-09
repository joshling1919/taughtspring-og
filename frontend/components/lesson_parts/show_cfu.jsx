import React from 'react';

const ShowCFU = ({ question, answer, sectionIndex, cfuIndex,
  updateCFU, deleteCFU }) => {
  return (
    <li className="show-subsection">
      <div className="cfu-show-container">
        <label>Question: </label>
        <div className="show-sub-item">
          {question}
        </div>
        <label>Answer: </label>
        <div className="show-sub-item">
          {answer}
        </div>
      </div>
    </li>
  );
};

export default ShowCFU;
