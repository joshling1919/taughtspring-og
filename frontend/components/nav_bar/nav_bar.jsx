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
      this.props.router.push('/create-lesson');
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
      return `${this._currentUser().first_name}`;
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
      <nav className="nav-bar">
        <div className="logo" id='nav-bar-item' onClick={this._goHome.bind(this)}>
          Taught Spring
        </div>
        <div id='nav-bar-item'>
          <input className="search" type="search" placeholder="search..."></input>
        </div>
        <div id='nav-bar-item'>
          <button className="nav-button pure-button">Subjects</button>
        </div>
        <div id='nav-bar-item'>
          <button
            onClick={this._handleUser.bind(this)}
            className="nav-button pure-button">{`${this._userButtonText()}`}</button>
        </div>
        <div id='nav-bar-item'>
          <button onClick={this._handleLog.bind(this)}
            className="nav-button pure-button">{`${this._logButtonText()}`}</button>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
