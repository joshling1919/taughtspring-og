import React from 'react';
import Errors from '../errors';
import ShowIndividualObjective from './show_individual_objective';
import ShowKeyPoint from './show_key_point';

class ShowObjective extends React.Component {
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
        <ShowIndividualObjective
          key={this._generateKey.bind(this, objective)()}
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
        <ShowKeyPoint key={this._generateKey.bind(this, keyPoint)()}
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
            <ul>
              {this._objectivesList()}
            </ul>
            <ul>
              {this._keyPointsList()}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default ShowObjective;
