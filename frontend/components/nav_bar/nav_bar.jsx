import React from 'react';
import LoginContainer from '../auth/login_container';
import { withRouter } from 'react-router';

class NavBar extends React.Component{

  _handleLogin(e){
    e.preventDefault();
    this.props.router.push('/login');
  }

  _handleNewUser(e){
    e.preventDefault();
    this.props.router.push('/signup');
  }

  _goHome(e){
    e.preventDefault();
    this.props.router.push('/');
  }

  render(){
    return(
      <nav className="nav-container-group">
        <ul className='nav-bar'>
          <li className="logo" id='nav-bar-item'>
            <h5 className="logo" onClick={this._goHome.bind(this)}>Taught Spring</h5>
          </li>
          <li id='nav-bar-item'>
            <input className="search" type="text"></input>
          </li>
          <li id='nav-bar-item'>
            <button>Subjects</button>
          </li>
          <li id='nav-bar-item'>
            <button onClick={this._handleNewUser.bind(this)}>New User</button>
          </li>
          <li id='nav-bar-item'>
            <button onClick={this._handleLogin.bind(this)}>Log In</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);
