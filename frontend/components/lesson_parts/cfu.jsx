import React from 'react';

const CFU = ({ question, answer, sectionIndex, cfuIndex,
  updateCFU, deleteCFU }) => {
  return (
    <li className="cfu-container">
      <label
        className="section-label question-label">{`CFU #${parseInt(cfuIndex) + 1}`}</label>
      <div className="cfu-question">
        <label className="section-label">Question: </label>
        <input
          className="questioncfu"
          defaultValue={question}
          id={sectionIndex}
          name={cfuIndex}
          onChange={updateCFU}
          />
      </div>
      <div className="cfu-answer">
        <label className="section-label">Answer: </label>
        <textarea
          className="answercfu"
          defaultValue={answer}
          id={sectionIndex}
          name={cfuIndex}
          onChange={updateCFU}
          />
      </div>
      <button type="button"
        className="delete-part delete-cfu"
        id={sectionIndex}
        name={cfuIndex}
        onClick={deleteCFU}><i
        id={sectionIndex}
        name={cfuIndex}
        className="fa fa-trash"
        aria-hidden="true"></i></button>
    </li>
  );
};

export default CFU;
