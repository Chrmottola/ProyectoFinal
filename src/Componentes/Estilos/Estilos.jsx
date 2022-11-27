import React from "react";
import "./Estilos.css"
import expresso from "./Img/expresso.jpg"
import lagrimaimg from "./Img/lagrima.jpg"
import cortadoimg from "./Img/cortado.jpg"
import cafeconlecheimg from "./Img/cafeconleche.jpg"
import moccaimg from "./Img/mocca.jpg"
import capuccinoimg from "./Img/capuccino.jpg"
import irlandesimg from "./Img/irlandes.jpg"

import fondoEstilos from "./Img/fondoEstilos.jpg"
import { useState } from "react";


const Estilos = () => {
  document.title = `Mundo Café Estilos`

  let cafeexpresso = "Café Negro Fuerte 25ml"
  let lungo = "Café Negro Fuerte 50ml"
  let lagrima = "Leche con una Pizca de Café"
  let cortado = "1/3 de Café y el Resto Leche"
  let cafeConLeche = "Café y Leche en Partes Iguales"
  let mocca = "Cafe, Leche y Chocolate"
  let capuccino = "Cafe, Leche, Crema y Canela"
  let cafeIrlandes = "Cafe, Whisky Irlades y Crema"


  const [infoexpresso, setInfo1] = useState("");
  const [infolungo, setInfo2] = useState("");
  const [infolagrima, setInfo3] = useState("");
  const [infocortado, setInfo4] = useState("");
  const [infocafeConLeche, setInfo5] = useState("");
  const [infomocca, setInfo6] = useState("");
  const [infocapuccino, setInfo7] = useState("");
  const [infocafeIrlandes, setInfo8] = useState("");


  return (
    <main className="mainEstilos">
      <p><em>Disfruta el Café en sus Distintas </em></p>
      <p><em>Formas de Preparacíon</em></p>
      <img className="imgFondoEstilos" src={fondoEstilos} alt="Imagen de Fondo" />
      <div className="divEstilosPrincipal">
        <div className="divEstilos">
          <p>Expresso</p>
          <p>{infoexpresso}</p>
          <img className="imgEstilos" src={expresso} alt="Imagen de expresso" />
          <button onClick={() => setInfo1(cafeexpresso)} className="btnEstilos">Mostrar Información</button>
        </div>
        <div className="divEstilos">
          <p>Lungo</p>
          <p>{infolungo}</p>
          <img className="imgEstilos" src={expresso} alt="Imagen de expresso" />
          <button onClick={() => setInfo2(lungo)} className="btnEstilos">Mostrar Información</button>
        </div>
        <div className="divEstilos">
          <p>Lagrima</p>
          <p>{infolagrima}</p>
          <img className="imgEstilos" src={lagrimaimg} alt="Imagen de expresso" />
          <button onClick={() => setInfo3(lagrima)} className="btnEstilos">Mostrar Información</button>
        </div>
        <div className="divEstilos">
          <p>Cortado</p>
          <p>{infocortado}</p>
          <img className="imgEstilos" src={cortadoimg} alt="Imagen de expresso" />
          <button onClick={() => setInfo4(cortado)} className="btnEstilos">Mostrar Información</button>
        </div>
        <div className="divEstilos">
          <p>Café Con Leche</p>
          <p>{infocafeConLeche}</p>
          <img className="imgEstilos" src={cafeconlecheimg} alt="Imagen de expresso" />
          <button onClick={() => setInfo5(cafeConLeche)} className="btnEstilos">Mostrar Información</button>
        </div>
        <div className="divEstilos">
          <p>Mocca</p>
          <p>{infomocca}</p>
          <img className="imgEstilos" src={moccaimg} alt="Imagen de expresso" />
          <button onClick={() => setInfo6(mocca)} className="btnEstilos">Mostrar Información</button>
        </div>
        <div className="divEstilos">
          <p>Cappuccino</p>
          <p>{infocapuccino}</p>
          <img className="imgEstilos" src={capuccinoimg} alt="Imagen de expresso" />
          <button onClick={() => setInfo7(capuccino)} className="btnEstilos">Mostrar Información</button>
        </div>
        <div className="divEstilos">
          <p>Café Irlandés</p>
          <p>{infocafeIrlandes}</p>
          <img className="imgEstilos" src={irlandesimg} alt="Imagen de expresso" />
          <button onClick={() => setInfo8(cafeIrlandes)} className="btnEstilos">Mostrar Información</button>
        </div>

      </div>
    </main>
  );
}


export default Estilos;

