import React, {Fragment} from "react";
import { Form, Button, Container} from "react-bootstrap";

const EditarProducto = () => {
  return (
    <Fragment>
      <Container>
        <h1 className="text-center my-4">Agregar nuevo Producto</h1>
        <Form className="my-4">
          <Form.Group>
            <Form.Label>Nombre del Producto *</Form.Label>
            <Form.Control type="text" placeholder="Ejm: Cafe con leche" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Precio *</Form.Label>
            <Form.Control type="number" placeholder="Ejm: $150" />
          </Form.Group>
          <h3 className="text-center my-4">Categoria</h3>
          <Form.Group className="d-flex justify-content-center">
            <Form.Check
              name="categoria"
              type="radio"
              label="Bebida Caliente"
              value="bebidaCaliente"
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Bebida fria"
              value="bebidaFria"
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Sandwich"
              value="Sandwich"
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Dulce"
              value="dulce"
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Salado"
              value="salado"
            />
          </Form.Group>
          <Button variant="danger" type="submit" size="lg" type="submit" block>
            Agregar Producto
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default EditarProducto;
