import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: true};
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
        password: e.target.password.value
      }
    };
    this.props.signup(user);
    this.props.router.push('/');
  }


  openModal () { this.setState({open: true}); }

  closeModal () {
    this.setState({open: false});
    this.props.router.push('/');
  }

  render(){
    return(
        <Modal className="modal" isOpen={this.state.open} onRequestClose={this.closeModal} >
          <form className="signup" onSubmit={this._handleSignup.bind(this)}>
            <label>First Name:</label>
            <input className="session-item" name= "fName" type="text"></input>
            <label>Last Name:</label>
            <input className="session-item" name= "lName" type="text"></input>
            <label>Email:</label>
            <input className="session-item" name= "email" type="text"></input>
            <label>Password:</label>
            <input className="session-item" name="password" type="password"></input>
            <label>Grade Level:</label>
            <select className="session-item" value={undefined}>
              <option className="optional" value={undefined}>(optional)</option>
              <option value={6}>6th Grade</option>
              <option value={7}>7th Grade</option>
              <option value={8}>8th Grade</option>
            </select>
            <label>Subject:</label>
            <select className="session-item" value={undefined}>
              <option className="optional" value={undefined}>(optional)</option>
              <option value="English">English</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="Social Studies">Social Studies</option>
              <option value="Other">Other</option>
            </select>
            <input type="submit" value="Sign Up" />
          </form>
          Already have an account? <a href="#login">Log In</a>
        </Modal>
    );
  }
}


export default withRouter(Signup);
