import React, { Fragment } from "react";
import { Form, Button, Container } from "react-bootstrap";

const AgregarProducto = () => {
  return (
    <Fragment>
      <h1 className='text-center my-4'>Agregar nuevo Producto</h1>
      <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre del Producto *</Form.Label>
          <Form.Control type="text" placeholder="Ejm: Cafe con leche" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Precio *</Form.Label>
          <Form.Control type="number" placeholder="Ejm: $150" />
        </Form.Group>
        <h3 className='text-center my-4'>Categoria</h3>
        <Form.Group controlId="formBasicCheckbox" className='d-flex justify-content-center'>
          <Form.Check type="checkbox" label="Bebida Caliente" />
          <Form.Check type="checkbox" label="Bebida fria" />
          <Form.Check type="checkbox" label="Sandwich" />
          <Form.Check type="checkbox" label="Dulce" />
          <Form.Check type="checkbox" label="Salado" />
        </Form.Group>
        <Button variant="danger" type="submit" size="lg" block>
          Agregar Producto
        </Button>
      </Form>
      </Container>
    </Fragment>
  );
};

export default AgregarProducto;
