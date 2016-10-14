import React from 'react';
import { withRouter } from 'react-router';

class SubjectSearch extends React.Component {
  constructor(props){
    super(props);
    this._findSubject = this._findSubject.bind(this);
    this._findSubjectAndGrade = this._findSubjectAndGrade.bind(this);
    this.gradeArray = ["6th Grade", "7th Grade", "8th Grade"];
    this.subjectArray = ["English", "Math", "Science", "Social Studies", "Other"];
  }

  _findSubject(e){
    e.preventDefault();
    this.props.router.push(`/filter/${e.target.innerHTML}`);
  }

  _findSubjectAndGrade(e) {
    e.preventDefault();
    this.props.router.push(`/filter/${e.target.name}/${e.target.innerHTML}`);
  }

  _gradeList(subject) {
    const gradeList = [];
    this.gradeArray.forEach((el) => {
      gradeList.push(
        <div key={subject + el} className="hoverable">
          {el}
        </div>
      );
    });
    return gradeList;
  }

  _toggleList(e){
    e.preventDefault();
    e.currentTarget.nextElementSibling.classList.toggle("show");
  }


  _subjectDropDown(){
    const subjectList = [];
    this.subjectArray.forEach((el, index) => {
      subjectList.push(
        <div key={el+index}>
          <button
            className="accordion">{el}</button>
          <div className="panel show">
            {this._gradeList(el)}
          </div>
        </div>
      );
    });
    return subjectList;
  }


  render() {
    return(
      <div className="drop-container">
        <ul className="dropdown">
          <div>
            {this._subjectDropDown()}
          </div>
        </ul>
      </div>
    );
  }
}


export default withRouter(SubjectSearch);
//
// <li className="hoverable">
//   <a className="dropdown-item"
//     onClick={this._findSubject}>English</a>
// </li>
// <ul>
//   <li className="hoverable">
//     <a className="d-sub"onClick={this._findSubjectAndGrade}
//       name="English">6th Grade</a>
//   </li>
//   <li className="hoverable">
//     <a className="d-sub" onClick={this._findSubjectAndGrade}
//       name="English">7th Grade</a>
//   </li>
//   <li className="hoverable">
//     <a className="d-sub" onClick={this._findSubjectAndGrade}
//       name="English">8th Grade</a>
//   </li>
// </ul>
// </div>
// <div>
// <li className="hoverable">
//   <a className="dropdown-item"
//     onClick={this._findSubject}>Math</a>
// </li>
//   <ul>
//     <li className="hoverable">
//       <a className="d-sub" onClick={this._findSubjectAndGrade}
//         name="Math">6th Grade</a>
//     </li>
//     <li className="hoverable">
//       <a className="d-sub" onClick={this._findSubjectAndGrade}
//         name="Math">7th Grade</a>
//     </li>
//     <li className="hoverable">
//       <a className="d-sub" onClick={this._findSubjectAndGrade}
//         name="Math">8th Grade</a>
//     </li>
//   </ul>
// </div>
// <div>
// <li className="hoverable">
//   <a className="dropdown-item"
//     onClick={this._findSubject}>Science</a>
// </li>
//   <ul>
//     <li className="hoverable">
//       <a className="d-sub" onClick={this._findSubjectAndGrade}
//         name="Science">6th Grade</a>
//     </li>
//     <li className="hoverable">
//       <a className="d-sub" onClick={this._findSubjectAndGrade}
//         name="Science">7th Grade</a>
//     </li>
//     <li className="hoverable">
//       <a className="d-sub" onClick={this._findSubjectAndGrade}
//         name="Science">8th Grade</a>
//     </li>
//   </ul>
// </div>
// <div>
// <li className="hoverable">
//   <a className="dropdown-item"
//     onClick={this._findSubject}>Social Studies</a>
// </li>
//   <ul>
//     <li className="hoverable" >
//       <a className="d-sub" onClick={this._findSubjectAndGrade}
//         name="Social Studies">6th Grade</a>
//     </li>
//     <li className="hoverable">
//       <a className="d-sub" onClick={this._findSubjectAndGrade}
//         name="Social Studies">7th Grade</a>
//     </li>
//     <li className="hoverable">
//       <a className="d-sub" onClick={this._findSubjectAndGrade}
//         name="Social Studies">8th Grade</a>
//     </li>
//   </ul>
// <li className="hoverable">
//   <a className="dropdown-item"
//     onClick={this._findSubject}>Other</a>
// </li>
