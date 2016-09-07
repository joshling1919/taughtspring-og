import React from 'react';

class EditKeyPoint extends React.Component {

  _updateKeyPoint(e){
    this.props.updateKeyPoint(parseInt(e.target.id),
      e.target.value);
  }

  _deleteKeyPoint(e){
    this.props.deleteKeyPoint(this.props.kpId);
  }

  render() {
    if (this.props.keyPoint) {
      return(
        <div className="lesson-details group">
          <label>KeyPoint: </label>
          <input
            className="lesson-item title"
            name= "keyPoint"
            defaultValue={this.props.keyPoint.point}
            onChange={this._updateKeyPoint.bind(this)}
            id={this.props.index}
            type="text"/>
          <button type="button"
            onClick={this._deleteKeyPoint.bind(this)}>Delete</button>

        </div>
      );
    } else {
      return null;
    }
  }
}


export default EditKeyPoint;
