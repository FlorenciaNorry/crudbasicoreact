import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import Swal from 'sweetalert2';

const ItemProducto = (props) => {

  const eliminarProducto = (id)=>{
    Swal.fire({
      title: 'Esta seguro de eiminar el producto?',
      text: "No puede volver atras esta operacion despues de eliminar !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(async(result) => {
      if (result.isConfirmed) {
        //logica para borrar el producto  
        try{
          const URL = `${process.env.REACT_APP_API_URL}/${id}`;
          const respuesta= await fetch(URL,{
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
          });
          console.log(respuesta);
          if(respuesta.status === 200){
            Swal.fire(
              'Producto Eliminado!',
              'El producto seleccionado fue eliminado.',
              'success'
            )
            props.consultarAPI();
          }

        }catch(error){
          console.log(error);
          //mostrar ventana de error
        }      
      }
    })
  }
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {
            props.producto.nombreProducto
        } 
        <span className="font-weight-bold"> $  
        {
            props.producto.precioProducto
        }
        </span>
      </p>
      <div>
        <Button variant="warning" className="mr-3">Editar</Button>
        <Button variant="danger" onClick={()=>eliminarProducto(props.producto.id)}>Borrar</Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
