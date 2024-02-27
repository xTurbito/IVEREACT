import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarIVE from "./layouts/navbar";


function App() {
 

  return (
    <div className='App'>
      <BrowserRouter>
      <NavBarIVE/>
      
      </BrowserRouter>
    </div>
  )
}

export default App
