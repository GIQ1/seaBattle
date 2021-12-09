import { Routes, Route } from "react-router-dom";
import LoginForm from "../elems/loginFrom";
import Table from "../elems/Table";
function routes() {

  return (
   <Routes>
    <Route path="/" element={<LoginForm />}/>
    <Route path="/main"  element={<Table />}/>
  </Routes>
  );
}

export default routes;
