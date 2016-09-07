import React from 'react';
import EditObjectiveContainer from './edit_objective_container';
import { uniqueId } from 'lodash';

class ObjectivesList extends React.Component {
  _list() {
    return(
      this.props.objectives.map( (objective, index) => (
        <EditObjectiveContainer
          objective={objective}
          key={objective.id} index={index}/>
      ))
    );
  }
  render() {
    return(
      <div>
        {this._list()}
      </div>
    );
  }
}

export default ObjectivesList;
