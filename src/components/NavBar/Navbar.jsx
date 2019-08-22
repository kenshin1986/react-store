import React, { Component } from 'react';
import axios from 'axios'
import Logo from './Logo';
import User from './User';
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
            <nav  className="container-fluid navbar-dark bg-dark 
                                navbar-expand-md 
                                mr-0 mt-0 ml-0 mb-0
                                pr-0 pt-0 pl-0 pb-0
                                fixed-top
                                ">
                <div className="row  
                                mr-0 mt-0 ml-0 mb-0
                                pr-0 pt-0 pl-0 pb-0
                                ">  
                    <div className="col-12 
                                    col-md-4 
                                    mr-0 mt-0 ml-0 mb-0
                                    pr-0 pt-0 pl-0 pb-0 "> {/*   inicio primera columna */}
                                <div className="row 
                                                mr-0 mt-0 ml-0 mb-0
                                                pr-0 pt-0 pl-0 pb-0    
                                                    ">
                                    <div className="col-4 col-md-7 
                                                    mr-0 mt-0 ml-0 mb-0
                                                    pr-0 pt-0 pl-0 pb-0">
                                       <Logo />
                                    </div>
                                    <div className="col-1 
                                                    offset-5 ">
                                        <button type="button" 
                                                className=" navbar-toggler"
                                                data-toggle="collapse" data-target="#menu-principal"
                                                aria-controls="menu-principal" aria-expanded="false"
                                                aria-label="Desplegar menu de navegacion">
                                            <span className="navbar-toggler-icon "></span>
                                        </button>
                                    </div>
                                </div>         
                    </div>     {/*   termina La primera columna */}
                    <div className="col-12 
                                    col-md-6 
                                    offset-md-1 offset-lg-2 ">  {/*   inicio segunda columna */}
                        <div className="collapse navbar-collapse" id="menu-principal">
                            <ul className="navbar-nav  ">
                                <li className="nav-item
                                                mr-0 mt-0 ml-0 mb-0
                                                pr-0 pt-0 pl-0 pb-0">
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
                                </li>
                                <li className="nav-item mr-2">
                                    <Link to="/productList">
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
                                            { ( value) => (
                                                <a className={value.pintar} href="#top"  
                                                    onClick={()=>{
                                                            value.abrirLogin();
                                                            
                                                            }}>
                                                        {value.btnLogName}
                                                 </a>
                                            )} 
                                    </ProductConsumer> 
                                </li>
                                
                                    <ProductConsumer>
                                        { ( value) => (
                                            <li className={value.pintarUserName}>
                                                <User
                                                    abrirLogin={value.abrirLogin}
                                                />  
                                                                                                                        
                                            </li>
                                         )}
                                    </ProductConsumer>
                              
                                <li className="nav-item">
                                    <ProductConsumer>
                                        { ( value) => (
                                               
                                                    <a href="#top" className={value.pintar}
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
                         </div>  {/* terminar el contenido del boton hamburgesa */}
                     </div> {/*   fin segunda columna */}
                </div>
               
           </nav>
        );
    }
}

export default Navbar;