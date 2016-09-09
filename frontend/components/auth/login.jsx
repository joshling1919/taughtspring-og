import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';


import Errors from '../errors';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.switchToSignUp = this.switchToSignUp.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  _handleLogin(e){
    e.preventDefault();
    let user = {
      user: {
        email: e.target.email.value,
        password: e.target.password.value
      }
    };
    this.props.login(user);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.loginOpen });
  }

  openModal () { this.setState({open: true}); }

  closeModal (e) {
    this.setState({open: false});
    this.props.closeLogin();
  }

  switchToSignUp (e) {
    e.preventDefault();
    this.closeModal();
    this.props.openSignup();
  }

  handleGuest(e){
    e.preventDefault();
    const guest = {
      user: {
        email: "guest@gmail.com",
        password: "password"
      }
    };
    this.props.login(guest);
  }

  render(){
    return(
        <Modal className="modal" isOpen={this.state.open} onRequestClose={this.closeModal} >
          <h3 className="session-title">Log In</h3>
          <Errors errors={this.props.errors}/>
          <form className="login" onSubmit={this._handleLogin.bind(this)}>
            <label>Email:</label>
            <input className="session-item" name= "email" type="text"></input>
            <label>Password:</label>
            <input className="session-item" name="password" type="password"></input>
            <input type="submit" value="Log In" />
            <button type="button" id="close"
              onClick={this.closeModal}>Close</button>
          </form>
          <div className="redirect">Don't have an account? <a
            className="session-link"
            onClick={this.switchToSignUp}>Register</a> today!</div>
          <div>
            <a className="guest" onClick={this.handleGuest}>Guest Login</a>
          </div>
        </Modal>
    );
  }
}


export default withRouter(Login);
