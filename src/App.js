import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './components/inicio';
import ListarProductos from './components/productos/ListarProductos';
import AgregarProducto from './components/productos/AgregarProducto';
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path='/'>
          <Inicio></Inicio>
        </Route>
        <Route exact path='/productos'>
          <ListarProductos></ListarProductos>
        </Route>
        <Route exact path='/productos/nuevo'>
          <AgregarProducto></AgregarProducto>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
