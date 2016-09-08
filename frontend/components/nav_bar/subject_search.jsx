import React from 'react';
import { withRouter } from 'react-router';

class SubjectSearch extends React.Component {
  constructor(props){
    super(props);
    this._findSubject = this._findSubject.bind(this);
  }

  _findSubject(e){
    e.preventDefault();
    this.props.findSubject(e.target.innerHTML);
  }



  render() {
    return(
      <div className="drop-container">
        <ul className="dropdown">
          <li>
            <a className="dropdown-item"
              onClick={this._findSubject}>English</a>
            <ul>
              <li>
                <a>6th Grade</a>
              </li>
              <li>
                <a>7th Grade</a>
              </li>
              <li>
                <a>8th Grade</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item"
              onClick={this._findSubject}>Math</a>
              <ul>
                <li>
                  <a>6th Grade</a>
                </li>
                <li>
                  <a>7th Grade</a>
                </li>
                <li>
                  <a>8th Grade</a>
                </li>
              </ul>
          </li>
          <li>
            <a className="dropdown-item">Science</a>
              <ul>
                <li>
                  <a>6th Grade</a>
                </li>
                <li>
                  <a>7th Grade</a>
                </li>
                <li>
                  <a>8th Grade</a>
                </li>
              </ul>
          </li>
          <li>
            <a className="dropdown-item"
              onClick={this._findSubject}>Social Studies</a>
              <ul>
                <li>
                  <a>6th Grade</a>
                </li>
                <li>
                  <a>7th Grade</a>
                </li>
                <li>
                  <a>8th Grade</a>
                </li>
              </ul>
          </li>
          <li>
            <a href="#" className="dropdown-item"
              onClick={this._findSubject}>Other</a>
          </li>
        </ul>
      </div>
    );
  }
}


export default withRouter(SubjectSearch);
