import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store/store';
import Root from './components/root';

//testing
import { openLogin
      } from './actions/session_actions';
import { push } from 'react-router-redux';
import { createObjective,
         createKeyPoint
       } from './util/lesson_key_items_api_util';

window.createObjective = createObjective;
window.createKeyPoint = createKeyPoint;
window.push = push;

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
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
