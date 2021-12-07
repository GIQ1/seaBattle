import { Routes, Route } from "react-router-dom";
import LoginForm from "../elems/loginFrom";
import Table from "../elems/Table";
function routes() {

  return (
     <Routes>
      <Route path='/' element={<LoginForm/>}>
      </Route>
      <Route path='/main' element={<Table/>}>
      </Route>
      <Route path='*' element={<div>404</div>}>
      </Route>
      </Routes>
  );
}

export default routes;
