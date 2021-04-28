import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const ListarProductos = (props) => {
  return (
    <Container>
        <h1 className="text-center my-5">Pagina Lista de Productos</h1>
        <ListGroup className="my-5">
            {
                props.productos.map((producto, indice)=><ItemProducto producto={producto} key={indice}></ItemProducto>)
            }
        </ListGroup>
  
    </Container>
  );
};

export default ListarProductos;
