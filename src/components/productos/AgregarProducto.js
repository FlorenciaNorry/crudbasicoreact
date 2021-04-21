import React, { Fragment, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const AgregarProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <Fragment>
      <Container>
        <h1 className="text-center my-4">Agregar nuevo Producto</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
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
              value=""
              sandwich
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
          <Button variant="danger" type="submit" size="lg" block>
            Agregar Producto
          </Button>
          <Alert variant="warning">Todos los campos son obligatorios</Alert>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AgregarProducto;
