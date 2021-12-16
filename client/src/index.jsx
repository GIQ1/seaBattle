import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state';

ReactDOM.render(<App
  postDate={state.profilePage.postDate}
  dialogData={state.messagesPage.dialogData}
  messageItem={state.messagesPage.messageItem}
/>, document.getElementById('root'));
