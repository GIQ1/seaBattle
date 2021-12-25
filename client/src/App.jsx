import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersPage from './components/Users/UsersPage';
import ProfileContainer from './components/Profile/ProfileContainer';

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
                <ProfileContainer/>
              )}
            />
            <Route
              path="/dialogs/"
              element={(
                <DialogsContainer/>
              )}
            />
             <Route
              path="/users/"
              element={(
                <UsersPage/>
              )}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
