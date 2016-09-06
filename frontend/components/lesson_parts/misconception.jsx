import React from 'react';

const Misconception = ({ sectionIndex, misconception,
  misconceptionIndex, updateMisconception }) => {
  return (
    <div>
      <label>Misconception </label>
      <input
        className="lesson-item"
        defaultValue={misconception}
        name= {misconceptionIndex}
        id={sectionIndex}
        onBlur={updateMisconception}
        type="text"/>
    </div>
  );
};

export default Misconception;
