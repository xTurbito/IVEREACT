import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import ComShowUsersUsers from "./components/Users/ShowUsers";
import CompEditUsers from "./components/Users/EditUsers";
import CompCreateUser from "./components/Users/CreateUser";
import CompShowProducts from "./components/Products/ShowProducts";
import CompEditProduct from "./components/Products/EditProducts";
import NavBarIVE from "./layouts/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarIVE />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<ComShowUsersUsers />} />
          <Route path="/editUsuario/:idUsuario" element={<CompEditUsers />} />
          <Route path="/create" element={<CompCreateUser />} />
          <Route path="products" element={<CompShowProducts />} />
          <Route  path="/editProducto/:idProducto" element={<CompEditProduct />}/>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
