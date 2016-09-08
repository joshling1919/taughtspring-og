import React from 'react';
import { withRouter } from 'react-router';

class SubjectSearch extends React.Component {
  constructor(props){
    super(props);
    this._findSubject = this._findSubject.bind(this);
    this._findSubjectAndGrade = this._findSubjectAndGrade.bind(this);
  }

  _findSubject(e){
    e.preventDefault();
    this.props.router.push(`/filter/${e.target.innerHTML}`);
  }

  _findSubjectAndGrade(e) {
    e.preventDefault();
    this.props.router.push(`/filter/${e.target.name}/${e.target.innerHTML}`);
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
                <a onClick={this._findSubjectAndGrade}
                  name="English">6th Grade</a>
              </li>
              <li>
                <a onClick={this._findSubjectAndGrade}
                  name="English">7th Grade</a>
              </li>
              <li>
                <a onClick={this._findSubjectAndGrade}
                  name="English">8th Grade</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item"
              onClick={this._findSubject}>Math</a>
              <ul>
                <li>
                  <a onClick={this._findSubjectAndGrade}
                    name="Math">6th Grade</a>
                </li>
                <li>
                  <a onClick={this._findSubjectAndGrade}
                    name="Math">7th Grade</a>
                </li>
                <li>
                  <a onClick={this._findSubjectAndGrade}
                    name="Math">8th Grade</a>
                </li>
              </ul>
          </li>
          <li>
            <a className="dropdown-item"
              onClick={this._findSubject}>Science</a>
              <ul>
                <li>
                  <a onClick={this._findSubjectAndGrade}
                    name="Science">6th Grade</a>
                </li>
                <li>
                  <a onClick={this._findSubjectAndGrade}
                    name="Science">7th Grade</a>
                </li>
                <li>
                  <a onClick={this._findSubjectAndGrade}
                    name="Science">8th Grade</a>
                </li>
              </ul>
          </li>
          <li>
            <a className="dropdown-item"
              onClick={this._findSubject}>Social Studies</a>
              <ul>
                <li>
                  <a onClick={this._findSubjectAndGrade}
                    name="Social Studies">6th Grade</a>
                </li>
                <li>
                  <a onClick={this._findSubjectAndGrade}
                    name="Social Studies">7th Grade</a>
                </li>
                <li>
                  <a onClick={this._findSubjectAndGrade}
                    name="Social Studies">8th Grade</a>
                </li>
              </ul>
          </li>
          <li>
            <a className="dropdown-item"
              onClick={this._findSubject}>Other</a>
          </li>
        </ul>
      </div>
    );
  }
}


export default withRouter(SubjectSearch);
