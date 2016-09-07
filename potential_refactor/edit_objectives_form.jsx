import React from 'react';
import ObjectivesListContainer from './objectives_list_container';

const EditObjectivesForm = () => {


  return(
    <div className="lesson-form-component">
      <form className="lesson-form" >
        <ObjectivesListContainer />
      </form>
    </div>
  );


};

export default EditObjectivesForm;
