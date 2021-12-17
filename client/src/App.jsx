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

const App = function (props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar />
        <div className="app-content">
          <Routes>
            <Route
              path="/profile/*"
              element={(
                <Profile
                  postDate={props.state.profilePage.postDate}
                  newPostText={props.state.profilePage.newPostText}
                  dispatch={props.dispatch}
                />
              )}
            />

            <Route
              path="/dialogs/"
              element={(
                <Dialogs
                  dialogData={props.state.messagesPage.dialogData}
                  messageItem={props.state.messagesPage.messageItem}
                  messageText={props.state.messagesPage.messageText}
                  dispatch={props.dispatch}
                />
)}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
