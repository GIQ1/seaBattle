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
import Header from './components/Header/Header';
import LoginPage from './components/Login/LoginPage';
import { connect } from 'react-redux';
import { chekAuthThunkCreator } from './redux/authReducer';
import { authRedirect} from "./components/hoc/authRedirect"
import { useState } from 'react';
import { useEffect } from 'react';
import { compose } from 'redux';


const App = function (props) {
  useEffect(() => {
    props.chekAuthThunkCreator()
    
  });
  return (
    <Router>
      <div className="app">
        <Header />
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



export default compose(connect(null,{chekAuthThunkCreator}))(App);
