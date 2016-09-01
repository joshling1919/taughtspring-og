import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store/store';
import Root from './components/root';

//testing
import { requestAllLessons
       } from './actions/lessons_actions';

window.requestAllLessons = requestAllLessons;

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
