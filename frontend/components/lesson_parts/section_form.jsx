import React from 'react';

class SectionForm extends React.Component {

  render() {
    let name, description, index, updateSectionField,
    updateSectionDescription;
    if (this.props.section) {
      name = this.props.section.name;
      description = this.props.section.description;
      index = this.props.index;
      updateSectionField = this.props.updateSectionField;
    }
    return(
      <div className="lesson-form-component">
        <form className="lesson-form" >
          <label>Name: </label>
          <input
            className="lesson-item"
            name= "name"
            id={index}
            defaultValue={name}
            onBlur={updateSectionField}
            type="text"/>
          <label>Description: </label>
          <textarea
            className="lesson-item"
            name= "description"
            id={index}
            onBlur={updateSectionField}
            defaultValue={description}
            />
        </form>
      </div>
    );
  }

}

export default SectionForm;
