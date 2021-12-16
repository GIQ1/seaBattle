import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderTree = () => {
  ReactDOM.render(<App
    state={state}
  />, document.getElementById('root'));
};

rerenderTree();

subscribe(rerenderTree);
