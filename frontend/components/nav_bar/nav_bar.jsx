import React from 'react';
import LoginContainer from '../auth/login_container';
import { withRouter } from 'react-router';

class NavBar extends React.Component{

  _handleLog(e){
    e.preventDefault();
    if (this._currentUser()) {
      this.props.logout();
      this.props.router.push('/');
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

  _userDropdown(){
    if (this._currentUser()) {
      return(
        <div className="drop-container">
          <ul className="dropdown">
            <li>
              <a href="#" className="dropdown-item">Home</a>
            </li>
            <li>
              <a href="#create-lesson" className="dropdown-item">Create Lesson</a>
            </li>
          </ul>
        </div>
      );
    }  else {
      return <div></div>;
    }
  }

  render(){
    return(
      <ul className="nav-bar">
        <li className="logo" id='nav-bar-item' onClick={this._goHome.bind(this)}>
          Taught Spring
        </li>
        <li id='nav-bar-item'>
          <input className="search" type="search" placeholder="search..."></input>
        </li>
        <li id='nav-bar-item'>
          <button className="nav-button pure-button">Subjects</button>
        </li>
        <div>
          <li id='nav-bar-item'>
            <button
              className="nav-button pure-button"
              onClick={this._handleUser.bind(this)}
              >{`${this._userButtonText()}`}</button>
            {this._userDropdown()}
          </li>
        </div>
        <li id='nav-bar-item'>
          <button onClick={this._handleLog.bind(this)}
            className="nav-button pure-button">{`${this._logButtonText()}`}</button>
        </li>
      </ul>

    );
  }
}

export default withRouter(NavBar);
