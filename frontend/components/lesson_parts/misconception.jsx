import React from 'react';
// import DeleteSubsectionButton from './delete_subsection_button';

const Misconception = ({ sectionIndex, misconception,
  misconceptionIndex, updateMisconception, deleteMisconception }) => {
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
        <button type="button" id={sectionIndex}
          name={misconceptionIndex}
          onClick={deleteMisconception}>Delete</button>
    </div>
  );
};

export default Misconception;
