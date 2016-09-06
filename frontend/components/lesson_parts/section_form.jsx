import React from 'react';
import DeletePartButton from './delete_part_button';
import CFU from './cfu';
import Misconception from './misconception';

class SectionForm extends React.Component {

  _misconceptionsList(index, misconceptions, updateMisconception) {
      if (misconceptions) {
        return (
          misconceptions.map( (misconception,i) => (
              <Misconception key={index+i}
                misconception={misconception}
                misconceptionIndex={i}
                updateMisconception={updateMisconception}
                sectionIndex={index}/>
            )
          )
        );
      } else {
        return null;
      }
  }

  render() {
    let name, description, index, updateSectionField,
    updateSectionDescription, deleteSection, misconceptions,
    cfus, updateMisconception, addMisconception;
    if (this.props.section) {
      name = this.props.section.name;
      description = this.props.section.description;
      index = this.props.index;
      updateSectionField = this.props.updateSectionField;
      deleteSection = this.props.deleteSection;
      misconceptions = this.props.section.misconceptions;
      cfus = this.props.section.cfus;
      updateMisconception = this.props.updateMisconception;
      addMisconception = this.props.addMisconception;
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
          {this._misconceptionsList.bind(this, index,
            misconceptions, updateMisconception )()}
          <button className="add-field" type="button"
            onClick={addMisconception} id={index}>
            Add Potential Misconception
          </button>
        </form>
        <DeletePartButton
          isSection={true}
          index={index}
          deletePart={deleteSection}/>
      </div>
    );
  }

}

export default SectionForm;
