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
  debugger
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar />
        <div className="app-content">
          <Routes>
          
            <Route path="/profile/*" element={<Profile postDate={props.postDate} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogData={props.dialogData} messageItem={props.messageItem} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
