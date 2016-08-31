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

  // _handleClick(e){
  //   e.preventDefault();
  //   this.props.router.push('/login');
  // }

  render(){
    return(
      <div>
        <Modal isOpen={this.state.open} onRequestClose={this.closeModal} >
          <form className="signup" onSubmit={this._handleSignup.bind(this)}>
            First Name: <input id="signup-item" name= "fName" type="text"></input>
            Last Name: <input id="signup-item" name= "lName" type="text"></input>
            Email: <input id="signup-item" name= "email" type="text"></input>
            Password: <input id="signup-item" name="password" type="password"></input>
            <input type="submit" value="Sign Up" />
          </form>
          Already have an account?<a href="#login">Log In</a>
        </Modal>
      </div>
    );
  }
}


export default withRouter(Signup);
