import React from "react";
import { Route, Routes } from "react-router-dom";
import CarDetail from "./components/cars/carDetail";
import CarList from "./components/cars/carsList";
import Contact from "./components/contact/contact";
import Faqs from "./components/faqs/faqs";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/login/login";
import NavBar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Register from "./components/register/register";
import AuthGuard from "./guards/auth-guard";

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
          <Route path="/profile"
          element={<AuthGuard component={Profile} />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/" element={<Home/>}/>
          
        </Routes>
      </div>
        <Footer />  
        
    </div>
  );
}

export default App;
