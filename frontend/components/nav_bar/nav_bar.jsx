import React from 'react';
import LoginContainer from '../auth/login_container';
import { withRouter } from 'react-router';
import SubjectSearch from './subject_search';
import SearchBarContainer from './search_bar_container';

class NavBar extends React.Component{

  _handleLog(e){
    e.preventDefault();
    if (this._currentUser()) {
      this.props.router.push('/create-lesson');
    } else {
      this.props.clearErrors();
      this.props.closeSignup();
      this.props.openLogin();
    }
  }

  _logOut(e){
      e.preventDefault();
      this.props.logout();
      this.pros.router.push('/');
  }

  _handleUser(e){
    e.preventDefault();
    if (this._currentUser()) {
      this._toProfile(e);
    } else {
      this.props.clearErrors();
      this.props.closeLogin();
      this.props.openSignup();
    }
  }

  _toProfile(e){
    e.preventDefault();
    this.props.router.push(`/profiles/${this._currentUser().id}`);
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
      return "Upload";
    } else {
      return "Log In";
    }
  }

  thirdButtonClass(){
    if (this._currentUser()) {
      return "nav-button new-button";
    } else {
      return "nav-button log-button";
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
              <a href="#"
                onClick={this._toProfile.bind(this)}
                className="dropdown-item">Profile</a>
            </li>
            <li>
              <a href="#"
                onClick={this._logOut.bind(this)}
                className="dropdown-item">Log Out</a>
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
        <li className="logo-container" onClick={this._goHome.bind(this)}>
          <img className="logo"
            src="http://res.cloudinary.com/jsling/image/upload/v1472963865/logo_tvyv00.png"
            />
        </li>
        <SearchBarContainer />
        <div className="nav-buttons">
          <li className='nav-bar-item'>
            <button className="nav-button subject-button">Subjects</button>
            <SubjectSearch />
          </li>

          <li className='nav-bar-item'>
              <button
                className="nav-button user-button"
                onClick={this._handleUser.bind(this)}
                >{`${this._userButtonText()}`}</button>
              {this._userDropdown()}
          </li>

          <li className='nav-bar-item'>
            <button onClick={this._handleLog.bind(this)}
              className={this.thirdButtonClass()}
              >{`${this._logButtonText()}`}</button>
          </li>
        </div>
      </ul>

    );
  }
}

export default withRouter(NavBar);
