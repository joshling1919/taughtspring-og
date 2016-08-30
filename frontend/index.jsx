import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


//testing
import { login,
         logout,
         signup
       } from './util/session_api_util';



window.login = login;
window.logout = logout;
window.signup = signup;
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
  ReactDOM.render(<div>taught spring is up!</div>, root);
});
