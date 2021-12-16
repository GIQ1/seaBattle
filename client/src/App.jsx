import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state';

const App = function (props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar />
        <div className="app-content">
          <Routes>
            <Route path="/profile/*" element={<Profile 
            postDate={props.state.profilePage.postDate} 
            addPost={addPost} 
            newPostText={props.state.profilePage.newPostText} 
            updateNewPostText={updateNewPostText}
            />} />

            <Route path="/dialogs/*" element={<Dialogs 
            dialogData={props.state.messagesPage.dialogData} 
            messageItem={props.state.messagesPage.messageItem}
            addMessage={addMessage} 
            messageText={props.state.messagesPage.messageText} 
            updateNewMessageText={updateNewMessageText}
             />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
