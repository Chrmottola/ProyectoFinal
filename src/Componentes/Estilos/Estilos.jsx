import React from "react";
import "./Estilos.css"
import expresso from "./Img/expresso.jpg"
import fondoEstilos from "./Img/fondoEstilos.jpg"
import { useState } from "react";


const Estilos = () => {
  document.title = `Mundo Café Estilos`
  
  let texto= "Café Negro Fuerte"
  const[info,setInfo]= useState("");

  return (
      <main className="mainEstilos">
        <p><em>Disfruta el Café en sus Distintas </em></p>
      <p><em>Formas de Preparacíon</em></p>
      <img className="imgFondoEstilos" src={fondoEstilos} alt="Imagen de Fondo" />
      <div className="divEstilos">
        <p>Expresso</p>
        <p>{info}</p>
        <img className="imgEstilos" src={expresso} alt="Imagen de expresso" />
        <button onClick={()=> setInfo(texto)} className="btnEstilos">Mostrar Información</button>
      </div>
      
      {/* <p>Lungo</p>
      <p>Lagrima</p>
      <p>Cortado</p>
      <p>Café Con Leche</p>
      <p>Latte</p>
      <p>Mocca</p>
      <p>Capuccino</p>
      <p>Café Irlandés</p>
 */}
</main>
  );
}


export default Estilos;

