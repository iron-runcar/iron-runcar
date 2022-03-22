import React from "react";
import { Link } from "react-router-dom";
import './footer.css';


function Footer() {
  
  return(
    <footer className="bg-light p-2 position-fixed w-100 bottom-0">
      <div className="container">
        <Link className="navbar-brand" to="/">lo͝okər</Link>
      </div>
      <div className="col-md-8 text-md-end d-inline">
        <ul className="container socialLinks d-flex flex-row-reverse">
          <li><Link to="#"><span><i className="fa fa-facebook-f"></i></span></Link></li>
          <li><Link to="#"><span><i className="fa fa-twitter"></i></span></Link></li>
          <li><Link to="#"><span><i className="fa fa-instagram"></i></span></Link></li>
        </ul>
      </div>
    </footer>
  )
  
  
  /* return(
   
  
  <footer className="footer-59391 position-fixed w-100 bottom-0">
    
      <div className="container">

        
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="site-logo">
              <Link to="#">lo͝okər <i className="fa fa-home"></i></Link>
            </div>
          </div>
          <div className="col-md-8 text-md-end">
            <ul className="list-unstyled social-icons">
              <li><Link to="#"><span><i className="fa-brands fa-facebook-f"></i></span></Link></li>
              <li><Link to="#"><span><i className="fa-brands fa-twitter"></i></span></Link></li>
              <li><Link to="#"><span><i className="fa-brands fa-instagram"></i></span></Link></li>
            </ul>
          </div>
        </div>

        
          <div className="col-md-12 text-center">
            <ul className="nav-links list-unstyled nav-right">
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Faqs</Link></li>
              <li><Link to="#">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className="row height:20px">
          <div className="col ">
            <div className="copyright">
              <p><small>Copyright 2022. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      
   
  </footer>


   
  ); */
}

export default Footer;