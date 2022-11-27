import React from 'react';
import './App.css';
import Footer from './Componentes/Footer/Footer';
import Navegador from './Componentes/NavBar/NavBar';
import Home from './Componentes/Home/Home';
/* import Intro from './Componentes/Intro/intro'; */
import Estilos from './Componentes/Estilos/Estilos';
import Contacto from './Componentes/Contacto/Contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navegador tituloNavegador="Mundo Café" />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Estilos" element={<Estilos/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="http:\\google.com"/>
      </Routes>
{/*       <Intro/> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
