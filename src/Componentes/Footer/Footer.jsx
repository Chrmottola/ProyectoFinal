import React from "react";
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
          <a href="https://www.facebook.com"><img src={facebook} alt="Ir a facebook" width="30" height="30" style={{borderRadius:"50%"}} className="iconofooter" /></a>
          <a href="https://www.instagram.com"><img src={instagram} alt="Ir a Instagram" width="30" height="30" className="iconofooter" /></a>
          <a href="https://api.whatsapp.com/send?phone=5491157680214"><img src={whatsapp} alt="logo whatsapp" width="30" height="30" style={{borderRadius:"50%"}} className="iconofooter" /></a>  
        </div>
        <div>
        <p>Christian Mottola</p>
        </div>
      
    </footer>
  )
}


export default Footer;
