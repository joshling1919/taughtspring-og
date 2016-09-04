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
      this.props.router.push(`/profiles/${this._currentUser().id}`);
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
        <li className="logo-container" onClick={this._goHome.bind(this)}>
          <img className="logo"
            src="https://lh3.googleusercontent.com/Wt_SNZ5ao7hCOUjdkFzDlwzqZlO7bzEWv3dLdCuB1PWP6Hv3mbRpyAoPLL8FzK-nzfT7Qr-Ezx0QQoTnATX9uAcPfzhW-7oO_VH0nTcCKEuJnsiRRPdhuLgCbl5y-OgEhCSrtAhYqnlfQ_lEJNFeihIy7sRhTQzi_GAB7ve2mRSNGoiAxLHlLOpaUetlwRq0F9q0cn8YdXBi6bhUqvciJtPy-a_4Z9ePKUW3JQYYkuTQKm0E70f_e-_qEIFAcUgjNphGMCRtZKMzCYads6LFXhpomqfGU1MZO-nN9-CdpaN8SAZT11NzYzxBJywrXuck_ZX2GQ5Uhydgc1m7AHre4hW6BPz_oKQGh-fIxewvOP_30J_R2sAi2_f-Bd4krgVKBJKOxv3Z6pzajt6rER4NT-IxWpw-EiezspC2ZP_HWrF3FDuQcQY4yL9ne7L7ZUQcl_uE_i3Cx1TGmQ2zCiVB97K_Vwcb7u7Z3N2hEg86u8JgKWBah6CCpF1OlXieE6dHotqykX3LBEM53P6jgw7Y0stG-otGvIOKumzuTcOvM81OntBApr84WSnIGw1dUzpZlRABZG0F9ABRsiDgk7lvt9rvnrxTVSMxZIiNSXAxFYORMDNc=w320-h170-no"
            />
        </li>
        <li className='nav-bar-search'>
          <input className="search" type="search" placeholder="&#xf002;"></input>
        </li>
        <div className="nav-buttons">
          <li className='nav-bar-item'>
            <button className="nav-button subject-button">Subjects</button>
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
              className="nav-button log-button"
              >{`${this._logButtonText()}`}</button>
          </li>
        </div>
      </ul>

    );
  }
}

export default withRouter(NavBar);
