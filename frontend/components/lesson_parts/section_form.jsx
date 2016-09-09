import React from 'react';
import Misconception from './misconception';
import CFU from './cfu';
import { uniqueId } from 'lodash';
import DeleteSectionButton from './delete_section_button';

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
        <form className="lesson-form section-form" >
          <div className="lesson-details-container">
            <div>
              <label className="section-label">Section Name: </label>
              <textarea
                className="lesson-item textarea-field section-field"
                name= "name"
                id={index}
                defaultValue={name}
                onChange={updateSectionField}
                type="text"/>
            </div>
            <div>
              <label>Description: </label>
              <textarea
                className="lesson-item textarea-field section-field descript-field"
                name= "description"
                id={index}
                onChange={updateSectionField}
                defaultValue={description}
                />
            </div>
            <div>
              <label>Potential Misconception(s): </label>
              <div>
                {this._misconceptionsList()}
              </div>
              <button className="add-field" type="button"
                onClick={addMisconception} id={index}
                name={this.props.sectionId}>
                Add Potential Misconception
              </button>
            </div>
            <div>
              <label>Checks For Understanding/Questions: </label>
              <div>
                {this._cfusList()}
              </div>
              <button className="add-field" type="button"
                onClick={addCFU}
                name={this.props.sectionId} id={index}>
                Add CFU
              </button>
            </div>

          </div>
          <DeleteSectionButton
            className="delete-section"
            isSection={true}
            index={index}
            sectionId={this.props.sectionId}
            deletePart={deleteSection}/>
        </form>
      </div>
    );
  }

}

export default SectionForm;
