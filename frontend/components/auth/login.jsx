import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';


import Errors from '../errors';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: true};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal () { this.setState({open: true}); }

  closeModal (e) {
    this.setState({open: false});
    this.props.router.push('/');
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
            <label>Password:</label>
            <input className="session-item" name="password" type="password"></input>
            <input type="submit" value="Log In" />
          </form>
          <button id="close" onClick={this.closeModal}>Close</button>
          <div className="redirect">Don't have an account? <a className="session-link" href="#signup">Register</a> today!</div>
        </Modal>
    );
  }
}


export default withRouter(Login);
