import React from "react";
import {  NavLink } from "react-router-dom";
import './navbar.css';
import AuthContext from '../../contexts/auth-context';

function NavBar() {
  const { user } = React.useContext(AuthContext);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand my-auto" to="/">lo͝okər</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active d-flex align-self-center" aria-current="page" to="/cars">Ver flota</NavLink>
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
              {user && (
                <NavLink className="nav-link btn rounded-pill btn-outline-success" to="/profile">{user.email}</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
