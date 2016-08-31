import React from 'react';
import LoginContainer from '../auth/login_container';


class NavBar extends React.Component{

  render(){
    return(
      <ul className='nav-bar'>
        <li id='nav-bar-item'>
          <h5>Taught Spring</h5>
        </li>
        <li id='nav-bar-item'>
          <LoginContainer />
        </li>
      </ul>
    );
  }
}

export default NavBar;
