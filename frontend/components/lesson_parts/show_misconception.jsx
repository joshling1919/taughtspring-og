import React from 'react';

const ShowMisconception = ({  misconception, sectionIndex, misconceptionIndex,
  updateMisconception, deleteMisconception }) => {
  return (
    <li className="show-subsection">
      <div className="show-sub-item">
        {misconception}
      </div>
    </li>
  );
};

export default ShowMisconception;
