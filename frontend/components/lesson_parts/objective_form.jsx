import React from 'react';
import Errors from '../errors';
import Objective from './objective';


class ObjectiveForm extends React.Component {
  _objectivesList() {
    return(
      this.props.objectives.map( (objective, index) => (
        <Objective key={objective + index}
          content={objective} />
      ))
    );
  }
  
  render() {
    return(
      <div className="lesson-form-component">
        <form className="lesson-form" >
          <Errors errors={this.props.errors}/>
          <div className="lesson-details-container">
            {this._objectivesList()}
            <span>+ Add Objective</span>
            <div className="lesson-details group">
              <label>Key Points: </label>
              <input
                className="lesson-item title"
                name= "keyPoint"
                type="text"/>
              <span>+ Add Key Point</span>
            </div>
            <div className="lesson-details group">
              <button className="lesson-item form-submit"
                type="submit">Submit Objective</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ObjectiveForm;
