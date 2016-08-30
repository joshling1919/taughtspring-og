import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';


//testing
import { login,
         logout,
         signup
       } from './util/session_api_util';
import { loginAction,
         logoutAction,
         signupAction
       } from './actions/session_actions';

window.loginAction = loginAction;
window.logoutAction = logoutAction;
window.signupAction = signupAction;

//testing

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  //testing
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});


const http = require("http");
setInterval(function() {
    http.get("http://taughtspring.herokuapp.com");
    console.log('pinged!');
}, 300000);
