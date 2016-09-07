import React from 'react';
import EditKeyPointContainer from './edit_key_point_container';
import { uniqueId } from 'lodash';

class KeyPointsList extends React.Component {

  _addKeyPoint(e){
    this.props.addKeyPoint(this.props.singleLesson.id);
  }

  _list() {
    return(
      this.props.keyPoints.map( (keyPoint, index) => {
          return(
              <EditKeyPointContainer
                keyPoint={keyPoint}
                kpId={keyPoint.id}
                key={keyPoint.created_at} index={index}/>

          );
        }
      ));
    }
  render() {
    return(
      <div>
        {this._list()}
        <button type="button"
          onClick={this._addKeyPoint.bind(this)}>
          Add Key Point
        </button>
      </div>
    );
  }
}

export default KeyPointsList;
