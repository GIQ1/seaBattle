import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import UsersPage from './components/Users/UsersPage';
import Header from './components/Header/Header';
import LoginPage from './components/Login/LoginPage';
import { connect } from 'react-redux';
import { chekAuthThunkCreator } from './redux/authReducer';
import { useEffect } from 'react';
import { compose } from 'redux';
import { Suspense } from 'react';



const DialogsContainer = React.lazy(()=> import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'))

const App = function (props) {
  useEffect(() => { props.chekAuthThunkCreator(); });
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
                <Suspense fallback={<div>LOADING</div>}><ProfileContainer /></Suspense>
              )}
            />
            

            <Route
              path="/dialogs/"
              element={(
                <Suspense fallback={<div>LOADING</div>}><DialogsContainer /></Suspense>
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


export default compose(connect(null, { chekAuthThunkCreator }))(App);
