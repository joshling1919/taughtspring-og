import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

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
    this.props.router.push('/');
  }

  openModal () { this.setState({open: true}); }

  closeModal () {
    this.setState({open: false});
    this.props.router.push('/');
  }

  // _handleClick(e){
  //   e.preventDefault();
  //   this.props.router.push('/signup');
  // }

  render(){
    return(
      <div>
        <Modal isOpen={this.state.open} onRequestClose={this.closeModal} >
          <form className="login" onSubmit={this._handleLogin.bind(this)}>
            Email: <input id="login-item" name= "email" type="text"></input>
            Password: <input id="login-item" name="password" type="password"></input>
            <input type="submit" value="Log In" />
          </form>
          Don't have an account? <a href="#signup">Register</a> today!
        </Modal>
      </div>
    );
  }
}


export default withRouter(Login);
