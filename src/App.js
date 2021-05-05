import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/inicio";
import Error404 from "./components/Error404";
import ListarProductos from "./components/productos/ListarProductos";
import AgregarProducto from "./components/productos/AgregarProducto";
import EditarProducto from "./components/productos/EditarProducto";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react';


function App() {
  const URL = process.env.REACT_APP_API_URL;
   console.log(URL);
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    consultarAPI();
  }, []);

  const consultarAPI = async() =>{
    try{
      const respuesta = await fetch(URL);
      console.log(respuesta);
      if(respuesta.status === 200){
        const listaProductos = await respuesta.json();
        setProductos(listaProductos);
      }
    }catch(error){
      console.log(error);
    }
  }


  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/productos">
          <ListarProductos productos = {productos} consultarAPI={consultarAPI}></ListarProductos>
        </Route>
        <Route exact path="/productos/nuevo">
          <AgregarProducto consultarAPI={consultarAPI}></AgregarProducto>
        </Route>
        <Route exact path="/productos/editar/:id">
          <EditarProducto consultarAPI={consultarAPI}></EditarProducto>
        </Route>
        <Route path='*'>
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
