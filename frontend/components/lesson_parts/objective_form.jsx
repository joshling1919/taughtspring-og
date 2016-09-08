import React from 'react';
import Errors from '../errors';
import Objective from './objective';
import KeyPoint from './key_point';

class ObjectiveForm extends React.Component {
  _generateKey(obj){
    if (obj.uniq) {
      return obj.uniq;
    } else {
      return obj.created_at;
    }
  }

  _objectivesList() {
    return(
      this.props.objectives.map( (objective, index) => (
        <Objective key={this._generateKey.bind(this, objective)()}
          updateObjectives={this.props.updateObjectives}
          deleteObjective={this.props.deleteObjective}
          index={parseInt(index)}
          content={objective.description} />
      ))
    );
  }

  _keyPointsList() {
    return(
      this.props.keyPoints.map( (keyPoint, index) => (
        <KeyPoint key={this._generateKey.bind(this, keyPoint)()}
          updateKeyPoints={this.props.updateKeyPoints}
          deleteKeyPoint={this.props.deleteKeyPoint}
          index={parseInt(index)}
          content={keyPoint.point} />
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
            <span className="add-field"
              onClick={this.props.addObjective}>+ Add Objective</span>
            {this._keyPointsList()}
            <span className="add-field"
              onClick={this.props.addKeyPoint}>+ Add Key Point</span>
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
