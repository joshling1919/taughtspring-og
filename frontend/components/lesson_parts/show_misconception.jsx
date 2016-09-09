import React from 'react';

const ShowMisconception = ({  misconception, sectionIndex, misconceptionIndex,
  updateMisconception, deleteMisconception }) => {
  return (
    <li>
      <label>Misconception </label>
      <div className="lesson-item">
        {misconception}
      </div>
    </li>
  );
};

export default ShowMisconception;
