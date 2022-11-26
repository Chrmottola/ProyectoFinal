import React from "react";
import "./Home.css";
import  ImagenPrincipal from "./granos.jpg"


const Home=()=>{
  document.title=`Mundo Café`
  return (
    <main>
      <img className="ImgPrincipal" src={ImagenPrincipal} alt="Imagen de Fondo"/>
    </main>
  );
}


export default Home;
