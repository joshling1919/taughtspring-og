import React from 'react';

class SectionForm extends React.Component {

  render() {
    return(
      <div className="lesson-form-component">
        <form className="lesson-form" >
          <label>Name: </label>
          <input
            className="lesson-item"
            name= "name"
            type="text"/>
        </form>
      </div>
    );
  }

}

export default SectionForm;
