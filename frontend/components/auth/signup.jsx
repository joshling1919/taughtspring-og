import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import Errors from '../errors';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  _handleSignup(e){
    e.preventDefault();
    let user = {
      user: {
        first_name: e.target.fName.value,
        last_name: e.target.lName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        subject: this._checkForNullSubject(e),
        grade: this._checkForNullGrade(e),
        bio: e.target.bio.value
      }
    };
    this.props.signup(user);
  }

  _checkForNullGrade(e){
    if (e.target.grade.value === "(optional)") {
      return null;
    } else {
      return e.target.grade.value;
    }
  }


  _checkForNullSubject(e){
    if (e.target.subject.value === "(optional)") {
      return null;
    } else {
      return e.target.subject.value;
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.signupOpen });
  }

  openModal () { this.setState({open: true}); }

  closeModal () {
    this.setState({open: false});
    this.props.closeSignup();
  }

  _textDisappear(e){
    e.target.defaultValue = "";
  }

  render(){
    return(
        <Modal className="modal" isOpen={this.state.open} onRequestClose={this.closeModal} >
          <h3 className="session-title">Create a New Account</h3>
          <Errors errors={this.props.errors}/>
          <form className="pure-form-stacked" onSubmit={this._handleSignup.bind(this)}>
            <label>First Name:</label>
            <input className="session-item" name= "fName" type="text"></input>
            <label>Last Name:</label>
            <input className="session-item" name= "lName" type="text"></input>
            <label>Email:</label>
            <input className="session-item" name= "email" type="text"></input>
            <label>Password:</label>
            <input className="session-item" name="password" type="password"></input>
            <label>Grade Level:</label>
            <select className="session-item" name="grade" value={undefined}>
              <option className="optional" value={undefined}>(optional)</option>
              <option value={6}>6th Grade</option>
              <option value={7}>7th Grade</option>
              <option value={8}>8th Grade</option>
            </select>
            <label>Subject:</label>
            <select className="session-item" name="subject" value={undefined}>
              <option className="optional" value={undefined}>(optional)</option>
              <option value="English">English</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="Social Studies">Social Studies</option>
              <option value="Other">Other</option>
            </select>
            <label>Bio:</label>
            <textarea className="session-item"
              id="bio-box"
              placeholder="(optional)"
              name="bio"
              onClick={this._textDisappear}/>
            <input type="submit" value="Sign Up" />
          </form>
          <button id="close" onClick={this.closeModal}>Close</button>
          <div className="redirect">Already have an account? <a className="session-link" href="#login">Log In</a></div>
        </Modal>
    );
  }
}


export default withRouter(Signup);
