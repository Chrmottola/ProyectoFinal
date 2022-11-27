import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
import facebook from "./img/facebook.ico"
import instagram from "./img/instagram.ico"
import whatsapp from "./img/whatsapp.ico"

const Footer = () => {
  return (
    <footer>
          <div>
          <p>© 2022 Copyright</p>
          </div>
          <div className="divFooterLink">
          <Link to="http://www.facebook.com" target="_blank" ><img src={facebook} alt="Ir a facebook" width="30" height="30" /></Link>
          <img src={instagram} alt="logo Instagram" width="30" height="30" />
          <img src={whatsapp} alt="logo whatsapp" width="30" height="30" />
        </div>
        <div>
        <p>Christian Mottola</p>
        </div>
      
    </footer>
  )
}


export default Footer;
