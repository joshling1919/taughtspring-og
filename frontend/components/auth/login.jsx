import React from 'react';
import Modal from 'react-modal';

class Login extends React.Component {
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

  render(){
    return(
      <Modal isOpen={true} >
          <form className="login" onSubmit={this._handleLogin.bind(this)}>
            Email: <input id="login-item" name= "email" type="text"></input>
            Password: <input id="login-item" name="password" type="password"></input>
            <input type="submit" value="Log In" />
          </form>
      </Modal>
    );
  }
}


export default Login;
