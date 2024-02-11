import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
 import ComShowUsersUsers from "./components/Users/ShowUsers";
import CompEditUsers from "./components/Users/EditUsers";
import CompCreateUser from "./components/Users/CreateUser";
import NavBarIVE from "./layouts/navbar";
import Products from "./components/Products";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarIVE />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<ComShowUsersUsers/>} />
          <Route path='/edit/:idUsuario' element={<CompEditUsers/>} />          
          <Route path='/create' element={<CompCreateUser/>} />          
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
