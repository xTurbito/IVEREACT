import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import ComShowUsersUsers from "./components/Users/ShowUsers";
import CompEditUser from "./components/Users/EditUsers";
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
          <Route path="/edit/:idUsuario" element={<CompEditUser/>} />          
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
