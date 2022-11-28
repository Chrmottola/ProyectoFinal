import React from "react";
import "./Registro.css"
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


const Registro = () => {

  const [usuarios, setUsuarios] = useState();

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((usuarios) => setUsuarios(usuarios))
}
  );
  return (
    <main className="mainUsuarios">
      <h2 className="h2Usuarios">Usuarios Registrados en Mundo Café</h2>

      <Container>
      {usuarios?
        <Row>
          {usuarios.map((usuario,index)=>(
            <Col sm={4} key={index}>
            <h3>{usuario.name}</h3>
            <p>{usuario.email}</p>
            <p>{usuario.address.city}</p>
            </Col>
          ))}
        </Row>
        : <div>Cargando Usuarios.....</div> 
      }
      </Container>
    </main>
  )
}

export default Registro;