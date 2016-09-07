import React from 'react';
import EditObjectiveContainer from './edit_objective_container';
import { uniqueId } from 'lodash';

class ObjectivesList extends React.Component {

  _list() {
    return(
      this.props.objectives.map( (objective, index) => {
          return(
            <EditObjectiveContainer
              objective={objective}
              objId={objective.id}
              key={objective.created_at} index={index}/>
          );
        }
      ));
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
