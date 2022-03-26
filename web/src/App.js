import React from "react";
import { Route, Routes } from "react-router-dom";
import CarDetail from "./components/cars/carDetail";
import CarList from "./components/cars/carsList";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import NavBar from "./components/navbar/navbar";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container py-5">
        <Routes>  
          <Route path="/cars" element={<CarList/>}/>
          <Route path="/cars/:id" element={<CarDetail/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
        <Footer />  
        
    </div>
  );
}

export default App;
