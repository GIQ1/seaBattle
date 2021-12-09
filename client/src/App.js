import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,Navigate 
} from "react-router-dom";
import Header from './views/elems/header' 
import LoginForm from "./views/elems/loginFrom";
import Rout from './views/routes'


function App() {
  const [token, setToken] = useState();
  if(!token) {
    return (
      <React.Fragment>
      <Header/>
      <LoginForm setToken ={setToken}/>
    </React.Fragment>);
  }
  return (
    <React.Fragment>
    <Header/>
    <Router>
      <Navigate to='/main'/>
        <Rout/>
    </Router>

  </React.Fragment>);
}
export default App;
