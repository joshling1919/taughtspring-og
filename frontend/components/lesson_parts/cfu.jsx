import React from 'react';

const CFU = ({  cfu, sectionIndex, cfuIndex,
  updateCFU, deleteCFU }) => {
  return (
    <div>
      <label>CFU </label>
      <input
        className="lesson-item"
        defaultValue={cfu}
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
