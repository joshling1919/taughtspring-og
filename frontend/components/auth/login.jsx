import React from 'react';
import Modal from 'react-modal';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: false};
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

  closeModal () { this.setState({open: false}); }

  render(){
    return(
      <div>
        <button onClick={this.openModal}>Log In</button>
        <Modal isOpen={this.state.open} onRequestClose={this.closeModal} >
          <form className="login" onSubmit={this._handleLogin.bind(this)}>
            Email: <input id="login-item" name= "email" type="text"></input>
            Password: <input id="login-item" name="password" type="password"></input>
            <input type="submit" value="Log In" />
          </form>
        </Modal>
      </div>
    );
  }
}


export default Login;
