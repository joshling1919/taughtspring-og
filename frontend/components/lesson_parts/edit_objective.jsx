import React from 'react';




class EditObjective extends React.Component {
  _updateObjective(e){
    this.props.updateObjective(e.target.value);
  }

  render() {
    if (this.props.objective.description) {
      return(
        <div className="lesson-details group">
          <label>Objective: </label>
          <input
            className="lesson-item title"
            name= "objective"
            defaultValue={this.props.objective.description}
            onChange={this._updateObjective.bind(this)}
            type="text"/>
        </div>
      );
    } else {
      return null;
    }
  }
}


export default EditObjective;
