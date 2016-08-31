import React from 'react';
import LoginContainer from '../auth/login_container';


class NavBar extends React.Component{

  render(){
    return(
      <div className="nav-container-group">
        <ul className='nav-bar'>
          <li className="logo" id='nav-bar-item'>
            <h6 className="logo">Taught Spring</h6>
          </li>
          <li id='nav-bar-item'>
            <input className="search" type="text"></input>
          </li>
          <li id='nav-bar-item'>
            <button>Subjects</button>
          </li>
          <li id='nav-bar-item'>
            <LoginContainer className="login"/>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
