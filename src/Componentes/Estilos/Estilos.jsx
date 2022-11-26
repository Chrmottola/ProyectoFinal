import React from "react";
import "./Estilos.css"
import expresso from "./expresso.jpg"
import { useState } from "react";


const Estilos = () => {
  document.title = `Mundo Café Estilos`
  
  let texto= "Café Negro Fuerte"
  const[info,setInfo]= useState("");

  return (
      <main>
      <div className="divEstilos">
        <p>Expresso</p>
        <p>{info}</p>
        <img className="imgEstilos" src={expresso} alt="Imagen de expresso" />
        <button onClick={()=> setInfo(texto)}>Mostrar Información</button>
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

