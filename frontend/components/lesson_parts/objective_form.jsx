import React from 'react';
import Errors from '../errors';


class ObjectiveForm extends React.Component {
  render() {
    return(
      <div className="lesson-form-component">
        <form className="lesson-form" >
          <Errors errors={this.props.errors}/>
          <div className="lesson-details-container">
            <div className="lesson-details group">
              <label>Objective: </label>
              <input
                className="lesson-item title"
                name= "objective"
                type="text"/>
            </div>
            <div className="lesson-details group">
              <label>Key Points: </label>
              <input
                className="lesson-item title"
                name= "keyPoint"
                type="text"/>
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
