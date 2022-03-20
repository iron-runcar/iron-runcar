import React from "react";
import { Route, Routes } from "react-router-dom";
import CarDetail from "./components/cars/carDetail";
import CarList from "./components/cars/carsList";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      
      <Route path="/cars" element={<CarList/>}/>
      <Route path="/cars/:id" element={<CarDetail/>}/>
     
      </Routes>
        <Footer />  
      
    </div>
  );
}

export default App;
