import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import App from './App';
import { Provider } from 'react-redux';

const rerenderTree = () => {
  ReactDOM.render(
    <Provider store={store}
    dispatch={store.dispatch.bind(store)}>
  <App/>
  </Provider>, document.getElementById('root'));
};
rerenderTree();

store.subscribe(() =>{ 
  rerenderTree();
});
