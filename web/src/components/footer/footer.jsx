import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import { FiTwitter } from "react-icons/fa";
import { BsFillEmojiSmileFill } from "react-icons/bs";


function Footer() {
  return(
   
  
  <footer className="footer-59391 position-absolute w-100 bottom-0">
    
      <div className="container">

        
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="site-logo">
              <Link to="#">lo͝okər <i className="fa fa-home"></i></Link>
            </div>
          </div>
          <div className="col-md-8 text-md-end">
           {/*  <ul className="list-unstyled social-icons">
              <li><Link to="#" className="fb"><span className="BsFillEmojiSmileFill"></span></Link></li>
              <li><Link to="#" className="tw"><span className="FiTwitter"></span></Link></li>
              <li><Link to="#" className="in"><span className="icon-instagram"></span></Link></li>
              <li><Link to="#" className="be"><span className="icon-behance"></span></Link></li>
              <li><Link to="#" className="dr"><span className="icon-dribbble"></span></Link></li>
              <li><Link to="#" className="yt"><span className="icon-play"></span></Link></li>
            </ul> */}
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


   
  );
}

export default Footer;