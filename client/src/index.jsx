import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state';
import App from './App';

const rerenderTree = () => {
  ReactDOM.render(<App
    state={store.getState()}
    dispatch={store.dispatch.bind(store)}

  />, document.getElementById('root'));
};
rerenderTree(store.state);

store.subscribe(rerenderTree);
