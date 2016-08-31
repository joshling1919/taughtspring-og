import React from 'react';
import LoginContainer from '../auth/login_container';
import { withRouter } from 'react-router';

class NavBar extends React.Component{

  _handleLog(e){
    e.preventDefault();
    if (this._currentUser()) {
      this.props.logout();
    } else {
      this.props.router.push('/login');
    }
  }

  _handleUser(e){
    e.preventDefault();
    if (this._currentUser()) {
      //go to home page for now
      this._goHome(e);
    } else {
      this.props.router.push('/signup');
    }
  }

  _goHome(e){
    e.preventDefault();
    this.props.router.push('/');
  }

  _userButtonText(){
    if (this._currentUser()) {
      return "User";
    } else {
      return "New User";
    }
  }

  _logButtonText(){
    if (this._currentUser()) {
      return "Log Out";
    } else {
      return "Log In";
    }
  }

  _currentUser(){
    return this.props.currentUser;
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
            <button onClick={this._handleUser.bind(this)}>{`${this._userButtonText()}`}</button>
          </li>
          <li id='nav-bar-item'>
            <button onClick={this._handleLog.bind(this)}>{`${this._logButtonText()}`}</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);
