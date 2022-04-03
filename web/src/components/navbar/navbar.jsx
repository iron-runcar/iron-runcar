import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';
import AuthContext from '../../contexts/auth-context';

function NavBar() {
  const { user, handleLogout } = React.useContext(AuthContext);

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
            <li className="nav-item d-flex align-items-center">
              <NavLink className="nav-link" to="/faqs">Como funciona</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/contact">¿Hablamos?</NavLink>
            </li>
            <li className="nav-item d-flex align-items-baseline">
              {user ? (
                <>
                  <NavLink className="nav-link btn rounded-pill btn-outline-success" to="/profile">{user.email.slice(0, 3)}</NavLink>
                  <li>
                    <button className="btn rounded-pill btn-danger mt-2 d-flex ms-2 align-items: center;
                    justify-content: space-around" onClick={handleLogout}>o͝o </button>
                  </li>
                </>

              ) : (
                <>
                  <NavLink className="nav-link btn rounded-pill btn-outline-success d-flex justify-content-center" to="/login">o͝o</NavLink>
                  <li>
                    <NavLink className="nav-link btn rounded-pill btn-outline-success" to="/register">Regístrate</NavLink>
                  </li>
                </>
              )
              }

            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
