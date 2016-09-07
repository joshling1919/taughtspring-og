import React from 'react';

const Misconception = ({  misconception, sectionIndex, misconceptionIndex,
  updateMisconception, deleteMisconception }) => {
  return (
    <div>
      <label>Misconception </label>
      <input
        className="lesson-item"
        defaultValue={misconception}
        id={sectionIndex}
        name={misconceptionIndex}
        onChange={updateMisconception}
        type="text"/>
      <button type="button"
        id={sectionIndex}
        name={misconceptionIndex}
        onClick={deleteMisconception}>Delete</button>
    </div>
  );
};

export default Misconception;
