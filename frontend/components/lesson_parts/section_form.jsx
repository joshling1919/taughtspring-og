import React from 'react';
import DeletePartButton from './delete_part_button';
import Misconception from './misconception';
import CFU from './cfu';
import { uniqueId } from 'lodash';

class SectionForm extends React.Component {

  _generateKey(obj){
    if (obj.uniq) {
      return obj.uniq;
    } else {
      return obj.created_at;
    }
  }

  _misconceptionsList(){
    if (this.props.misconceptions) {
      return(
        this.props.misconceptions.map( (misconception, i) => {
          return(
              <Misconception key={this._generateKey.bind(this, misconception)()}
                misconception={misconception.misconception}
                updateMisconception={this.props.updateMisconception}
                sectionIndex={this.props.index}
                deleteMisconception={this.props.deleteMisconception}
                misconceptionIndex={i}/>
            );
          }
        )
      );
    } else {
      return <div/>;
    }
  }

  _cfusList(){
    if (this.props.cfus) {
      return(
        this.props.cfus.map( (cfu, i) => {
          return(
              <CFU key={this._generateKey.bind(this, cfu)()}
                question={cfu.question}
                answer={cfu.answer}
                updateCFU={this.props.updateCFU}
                sectionIndex={this.props.index}
                deleteCFU={this.props.deleteCFU}
                cfuIndex={i}/>
            );
          }
        )
      );
    } else {
      return <div/>;
    }
  }





  render() {
    let name, description, index, updateSectionField,
    updateSectionDescription, deleteSection, addMisconception,
    addCFU;
    if (this.props.section) {
      name = this.props.section.name;
      description = this.props.section.description;
      index = this.props.index;
      updateSectionField = this.props.updateSectionField;
      deleteSection = this.props.deleteSection;
      addCFU = this.props.addCFU;
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
            onChange={updateSectionField}
            type="text"/>
          <label>Description: </label>
          <textarea
            className="lesson-item"
            name= "description"
            id={index}
            onChange={updateSectionField}
            defaultValue={description}
            />
          {this._misconceptionsList()}
          <button className="add-field" type="button"
            onClick={addMisconception} id={index}
            name={this.props.sectionId}>
            Add Potential Misconception
          </button>
          {this._cfusList()}
          <button className="add-field" type="button"
            onClick={addCFU}
            name={this.props.sectionId} id={index}>
            Add CFU
          </button>
        </form>
        <DeletePartButton
          isSection={true}
          index={index}
          sectionId={this.props.sectionId}
          deletePart={deleteSection}/>
      </div>
    );
  }

}

export default SectionForm;
