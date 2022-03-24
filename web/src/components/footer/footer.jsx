import React from "react";
import { Link } from "react-router-dom";



function Footer() {
  
  return(
    <footer className="bg-light p-2 position-fixed w-100 bottom-0">
      <div className="container d-flex">
        <ul className="me-auto list-unstyled mb-0">
          <li><Link className="navbar-brand btn stretched-link" to="/">lo͝okər</Link></li>
        </ul>
        
        <ul className="list-unstyled mb-0 d-flex">
          <li><Link to="#"><span><i className="btn stretched-link me-3 fa fa-facebook-f"></i></span></Link></li>
          <li><Link to="#"><span><i className="btn stretched-link me-3 fa fa-twitter"></i></span></Link></li>
          <li><Link to="#"><span><i className="btn stretched-link fa fa-instagram"></i></span></Link></li>
        </ul>
      </div>
    </footer>
  )
  
}

export default Footer;