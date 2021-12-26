import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersPage from './components/Users/UsersPage';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/login';


const App = function () {
  return (
    <Router>
      <div className="app">
        <HeaderContainer />
        <NavBar />
        <div className="app-content">
          <Routes>
            <Route
              path="/login/*"
              element={(
                <LoginPage />
              )}
            />
            <Route
              path="/profile/*"
              element={(
                <ProfileContainer/>
              )}
            />
            <Route
              path="/dialogs/"
              element={(
                <DialogsContainer />
              )}
            />
            <Route
              path="/users/"
              element={(
                <UsersPage />
              )}
            />
          </Routes>

        </div>
      </div>
    </Router>
  );
};

export default App;
