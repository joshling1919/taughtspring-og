import React from 'react';
import { Router,
         Route,
         hashHistory,
         IndexRoute
       } from 'react-router';
import App from '../components/app';
import LoginContainer from '../components/auth/login_container';

class AppRouter extends React.Component {

  render() {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
