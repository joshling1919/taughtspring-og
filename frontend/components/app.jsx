import React from 'react';
import { withRouter } from 'react-router';

class App extends React.Component {

  _login(){
    this.props.router.push('/login');
  }

  render() {
    return(
      <div>
        <button onClick={this._login.bind(this)}>LogIn</button>
        {this.props.children}
      </div>
    );
  }
}



export default withRouter(App);
