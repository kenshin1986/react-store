import React, { Component } from 'react';
import axios from 'axios'
import Logo from './Logo';
import BotonBarraTop from '../Botones/BotonBarraTop';
import CartContador from '../Cart/CartContador'
import './navbar.css';
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../Context'



class Navbar extends Component {
   state ={
          datos:[],
   }
   componentDidMount(){
       this.obtenerDatosBtones();
   }
   obtenerDatosBtones =() => {
        axios.get(`http://localhost:3001/agrupaciones`)
    
        .then(res => {
            this.setState({
               datos: res.data.agrupaciones
            })
        })
   }

    render() {
        return (
            <nav  className="navbar navbar-dark bg-dark navbar-expand-md fixed-top mt-0 mb-5 pb-0 pt-0">
                <div className="row m-0  ">  {/*   inicio primera columna */}
                    <div className="col-12 col-md-4 col-lg-7  ">
                        <ul className="navbar-nav ">
                            <li className="nav-item" >
                                <div className="row m-0 ">
                                    <div className="col-7 col-md-7 ">
                                       <Logo />
                                    </div>
                                    <div className="col-3 mt-1 order-md-2">
                                    <ProductConsumer>
                                        { ( value) => (
                                                <button type="button" className="btn text-white"
                                                    data-toggle="modal" data-target="#exampleModal"
                                                     onClick={()=>{
                                                           value.abrirBusqueda();
                                                         }}>
                                                    <i className="fas fa-search" />
                                                </button>
                                         )}
                                    </ProductConsumer>
                                    </div>
                                    <div className="col-1 order-md-1">
                                        <button type="button" className=" navbar-toggler "
                                            data-toggle="collapse" data-target="#menu-principal"
                                            aria-controls="menu-principal" aria-expanded="false"
                                            aria-label="Desplegar menu de navegacion">
                                            <span className="navbar-toggler-icon "></span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>     {/*   termina La primera columna */}
                    <div className="col-12 col-md-8 mt-md-2 col-lg-5  ">  {/*   inicio segunda columna */}
                        <div className="collapse navbar-collapse" id="menu-principal">
                            <ul className="navbar-nav  ">
                                <li className="nav-item">
                                    <Link to="/ProductList">
                                        Productos
                                    </Link>
                                </li>
                                { this.state.datos.map((dato, i)=>{
                                     return(
                                        <li className="nav-item 
                                                  mt-2 mr-lg-2 " key={i}>
                                          <BotonBarraTop
                                               key={i}
                                               datos={dato}
                                        />
                                       </li>
                                     )  
                                  })}
                                <li className="nav-item">
                                <ProductConsumer>
                                        {/* { ( value) => (
                                            <a href="login" data-toggle="modal" data-target="#login" 
                                                onClick={()=>{
                                                           value.abrirLogin();
                                                         }}>
                                                Ingresar
                                            </a>
                                               
                                         )} */}
                                           <button className="btn btn-primary">
                                               
                                           </button> 

                                    </ProductConsumer>
                                    
                                </li>
                                <li className="nav-item">
                                <ProductConsumer>
                                        { ( value) => (
                                            <a href="registro" data-toggle="modal" data-target="#registro"
                                                onClick={()=>{
                                                    value.abrirRegistro();
                                                         }}>
                                                Registrarse
                                            </a>
                                               
                                         )}
                                    </ProductConsumer>
                               </li>
                                <li className="nav-item">
                                        <CartContador/>
                                </li>
                            </ul>
                        </div>
                    </div> {/*   fin segunda columna */}
                </div>
               
           </nav>
        );
    }
}

export default Navbar;