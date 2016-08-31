import React from 'react';
import LoginContainer from '../auth/login_container';
import { withRouter } from 'react-router';

class NavBar extends React.Component{

  _handleClick(e){
    e.preventDefault();
    this.props.router.push('/login');
  }

  render(){
    return(
      <nav className="nav-container-group">
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
            <button onClick={this._handleClick.bind(this)}>Sign In</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);
