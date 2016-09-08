import React from 'react';


class SubjectSearch extends React.Component {
  constructor(props){
    super(props);
    this._findEnglish = this._findEnglish.bind(this);
    this._findMath = this._findMath.bind(this);
    this._findScience = this._findScience.bind(this);
    this._findSocialStudies = this._findSocialStudies.bind(this);
    this._findOther = this._findOther.bind(this);
  }



  render() {
    return(
      <div className="drop-container">
        <ul className="dropdown">
          <li>
            <a className="dropdown-item"
              onClick={this._findEnglish}>English</a>
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
            <a className="dropdown-item">Math</a>
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
            <a className="dropdown-item">Social Studies</a>
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
            <a href="#" className="dropdown-item">Other</a>
          </li>
        </ul>
      </div>
    );
  }
}


export default SubjectSearch;
