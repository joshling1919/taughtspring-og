import React from 'react';
import { Router,
         Route,
         hashHistory,
         IndexRoute
       } from 'react-router';
import App from '../components/app';

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
