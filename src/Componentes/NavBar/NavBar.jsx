import React from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";
import logo from "./img/logo.png"

const Navegador=({tituloNavegador})=>{
  return(
      <header className="headerNavegador">
      <div className="divNavBar">
      <img src={logo} alt="logo" width="60px" height="60px"/>
      <h2 className="navBarTitulo">{tituloNavegador}</h2>
      </div>
      <div className="navNavbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Guia">Guia</NavLink></li>
        <li><NavLink to="/Estilos">Estilos</NavLink></li>
        <li><NavLink to="/Contacto">Contacto</NavLink></li>
        <li><NavLink to="/Registro">Usuarios</NavLink></li>
      </ul>
    </div>
    </header>
  )
};

export default Navegador;

