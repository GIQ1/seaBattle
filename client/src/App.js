import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css'


import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
  return (
<Router>
  <div className="app">
    <Header />
    <NavBar />  
    <div className="app-content">
    <Routes>
     <Route path='/profile/*' element={<Profile/>}/>
     <Route path='/dialogs/*' element={<Dialogs/>}/>
    </Routes>
    </div>
  </div>
  </Router>
  );

}

export default App;
