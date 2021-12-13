import { Routes, Route } from "react-router-dom";
import Page from "../page/mainPage";
import LoginForm from "../elems/loginFrom";

function routes(props) {
  console.log(props)
  return (
   <Routes >
    <Route path="/" element={LoginForm(props.setToken)}/>
    <Route path="/main"  element={<Page />}/>
  </Routes>
  );
}


export default routes;
