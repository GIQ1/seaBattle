import React, { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate ,
} from "react-router-dom";
import Header from './views/elems/header' 
import LoginForm from "./views/elems/loginFrom";
import Rout from './views/routes'


function App() {
  const [token, setToken] = useState();

    if(!token) {
    return (
      <React.Fragment>
        <Router>
          <Rout setToken={setToken}/>
          </Router>    
    </React.Fragment>);
  }
  return (
    <React.Fragment>
    {/* <Router>
      <Rout />
    </Router> */}
  </React.Fragment>);
}
export default App;
