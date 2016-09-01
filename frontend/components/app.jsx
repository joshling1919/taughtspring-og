import React from 'react';
import { withRouter } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';

class App extends React.Component {

  render() {
    return(
      <div>
        <NavBarContainer />
        
        {this.props.children}
      </div>
    );
  }
}



export default withRouter(App);
