import React from "react";
import "./Home.css";
import ImagenPrincipal from "./granos.jpg"


const Home = () => {
  document.title = `Mundo Café`
  return (
    <main className="mainHome">
      <p><em>Mundo Café... Un Lugar Para Los Amantes Del Buen Café</em></p>
      <p><em>Una Comunidad Para Descubrir, Disfrutar Y Aprender</em></p>
      <img className="ImgPrincipal" src={ImagenPrincipal} alt="Imagen de Fondo" />
    </main>
  );
}


export default Home;
