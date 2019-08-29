import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar.jsx';
import ProductList from './components/Productos/ProductList';
import Details from './components/Productos/Details';
import Cart from './components/Cart/Cart'
import Default from './components/Default/Default';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import Paypal from './components/Pagos/Paypal.jsx'
import ModalSearch from './components/Modals/ModalSearch'
import Modal from './components/Modals/Modal'
import ModalLogin from './components/Modals/ModalLogin'
import ModalRegistro from './components/Modals/ModalRegistro'
import ModalNoRegistro from './components/Modals/ModalNoRegistro'
import ModalOpcion from './components/Modals/ModalOpcion'
import ModalOptPago from './components/Modals/ModalOptPago'





class App extends Component {
  render() {
    return (
     
      <BrowserRouter>
        <Navbar />
         <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/productList" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/paypal" component={Paypal}/>
          <Route path="/agrupaciones/*" component={ProductList}/>
          <Route  component={Default}/>
        </Switch> 
        <Footer/>
        <Modal/>
        <ModalSearch/>
        <ModalLogin/>
        <ModalRegistro/>
        <ModalOpcion/>
        <ModalNoRegistro/>
        <ModalOptPago/>
        </BrowserRouter>
        
    );
  }

}

export default App;
