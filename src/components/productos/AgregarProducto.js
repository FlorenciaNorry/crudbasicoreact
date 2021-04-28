import React, { Fragment, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import Swal from 'sweetalert2';

const AgregarProducto = (props) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    //valida datos
    if (
      nombreProducto.trim() === "" ||
      precioProducto <= 0 ||
      precioProducto > 5000 ||
      categoria === ""
    ) {
      //si falla la validacion mostra alert
      setError(true);
      return;
    } else {
      //si esta todo bien envio los datos a la api
      setError(false);
      //crear el objeto 
      const producto = {
        // nombreProducto: nombreProducto,
        // precioProducto: precioProducto,
        // categoria: categoria,


        nombreProducto,
        precioProducto,
        categoria

      }
      console.log(producto);

      try{
        const datosEnviar = {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(producto)
        }
        const respuesta = await fetch('http://localhost:3004/cafeteria',datosEnviar);
        console.log(respuesta);   
        if(respuesta.status === 201){
          Swal.fire(
            'Producto agregado!',
            'Se agrego un nuevo producto!',
            'success'
          )
          props.consultarAPI();
        }

      }catch(error){
        console.log(error);
        Swal.fire(
          'Ocurrio un error!',
          'Intentelo de nuevo mas tarde!',
          'error'
        )
      }
    }
  };

  return (
    <Fragment>
      <Container>
        <h1 className="text-center my-4">Agregar nuevo Producto</h1>
        <Form onSubmit={handleSubmit} className="my-4">
          <Form.Group >
            <Form.Label>Nombre del Producto *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ejm: Cafe con leche"
              onChange={(e) => setNombreProducto(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Precio *</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ejm: $150"
              onChange={(e) => setPrecioProducto(parseInt(e.target.value))}
            />
          </Form.Group>
          <h3 className="text-center my-4">Categoria</h3>
          <Form.Group className="d-flex justify-content-center">
            <Form.Check
              name="categoria"
              type="radio"
              label="Bebida Caliente"
              value="bebidaCaliente"
              onChange={cambiarCategoria}
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Bebida fria"
              value="bebidaFria"
              onChange={cambiarCategoria}
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Sandwich"
              value="Sandwich"
              onChange={cambiarCategoria}
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Dulce"
              value="dulce"
              onChange={cambiarCategoria}
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Salado"
              value="salado"
              onChange={cambiarCategoria}
            />
          </Form.Group>
          <Button variant="danger" type="submit" size="lg" type="submit" block>
            Agregar Producto
          </Button>
          {
            // operador ternario
            error ? (
              <Alert variant="warning">Todos los campos son obligatorios</Alert>
            ) : null
          }
        </Form>
      </Container>
    </Fragment>
  );
};

export default AgregarProducto;
