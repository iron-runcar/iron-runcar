import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">lo͝okər</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/cars">Ver flota</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"to="/faqs">Como funciona</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/contact">¿Hablamos?</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn rounded-pill btn-outline-success"to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
