import React, { Fragment, useState, useEffect, useRef } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams, withRouter } from "react-router-dom";
import { campoRequerido, rangoPrecio } from "../common/helpers";

const EditarProducto = (props) => {
  //obtener el parametro
  console.log(useParams().id);
  const codProducto = useParams().id;
  // const {id} = useParams();

  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  const [producto, setProducto] = useState({});
  const URL = process.env.REACT_APP_API_URL + "/" + codProducto;
  //aqui creo las variables useRef
  const nombreProductoRef = useRef("");
  const precioProductoRef = useRef(0);

  useEffect(async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const productoSolicitado = await respuesta.json();
        setProducto(productoSolicitado);
      }
    } catch (error) {
      console.log(error);
      //mensaje de error
    }
  }, []);

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let categoriaModificada = categoria === "" ? producto.categoria : categoria;
    // console.log(categoriaModificada);
    // console.log(nombreProductoRef.current);
    // console.log(nombreProductoRef.current.value);
    //validar datos
    if (
      campoRequerido(nombreProductoRef.current.value) &&
      rangoPrecio(parseFloat(precioProductoRef.current.value))&&
      campoRequerido(categoriaModificada)
    ) {
      setError(false);

      try{
        const productoModificado = {
          nombreProducto: nombreProductoRef.current.value,
          precioProducto: precioProductoRef.current.value,
          categoria: categoriaModificada,
          
        }
        
        const respuesta = await fetch (URL,{
          method:'PUT',
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(productoModificado)
        });
        if(respuesta.status === 200){
          //se actualizan los datos de la api
          Swal.fire(
            'Producto modificado!',
            'Se actualizaron los datos del producto!',
            'success'
          )
          //consultar la api
            props.consultarAPI();
          //redireccionar
          props.history.push('/productos');
        }

      }catch(error){

        console.log(error);
      }
    } else {
      setError(true);
    }

    //si son correctos hago elrequest

    //si no muestro cartel de error
  };

  return (
    <Fragment>
      <Container>
        <h1 className="text-center my-4">Editar nuevo Producto</h1>
        <Form onSubmit={handleSubmit} className="my-4">
          <Form.Group>
            <Form.Label>Nombre del Producto *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ejm: Cafe con leche"
              defaultValue={producto.nombreProducto}
              ref={nombreProductoRef}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Precio *</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ejm: $150"
              defaultValue={producto.precioProducto}
              ref={precioProductoRef}
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
              inline
              defaultChecked={
                producto.categoria && producto.categoria === "bebidaCaliente"
              }
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Bebida fria"
              value="bebidaFria"
              onChange={cambiarCategoria}
              inline
              defaultChecked={
                producto.categoria && producto.categoria === "bebidaFria"
              }
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Dulce"
              value="dulce"
              onChange={cambiarCategoria}
              inline
              defaultChecked={
                producto.categoria && producto.categoria === "dulce"
              }
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Salado"
              value="salado"
              onChange={cambiarCategoria}
              inline
              defaultChecked={
                producto.categoria && producto.categoria === "salado"
              }
            />
          </Form.Group>
          <Button variant="danger" type="submit" size="lg" type="submit" block>
            Guardar
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
//withRouter sirve para las rutas

export default withRouter(EditarProducto);
