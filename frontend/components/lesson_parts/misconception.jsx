import React from 'react';

const Misconception = ({  misconception, sectionIndex, misconceptionIndex,
  updateMisconception, deleteMisconception }) => {
  return (
    <li className="lesson-details group mis-container">
      <div>
        <textarea
          className="lesson-item textarea-field"
          defaultValue={misconception}
          id={sectionIndex}
          name={misconceptionIndex}
          onChange={updateMisconception}
          />
        <button type="button"
          id={sectionIndex}
          className="delete-part"
          name={misconceptionIndex}
          onClick={deleteMisconception}><i
          id={sectionIndex} name={misconceptionIndex} className="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </li>
  );
};

export default Misconception;
