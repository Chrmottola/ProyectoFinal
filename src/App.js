import React from 'react';
import './App.css';
import Footer from './Componentes/Footer/Footer';
import Navegador from './Componentes/NavBar/NavBar';
import Home from './Componentes/Home/Home';
import Estilos from './Componentes/Estilos/Estilos';
import Contacto from './Componentes/Contacto/Contacto';
import Registro from './Componentes/Registro/Registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navegador tituloNavegador="Mundo Café" />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Estilos" element={<Estilos/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Registro" element={<Registro/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
