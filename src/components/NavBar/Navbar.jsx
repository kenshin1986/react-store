import React, { Component } from 'react';
import axios from 'axios'
import Logo from './Logo';
import User from './User';
import BotonBarraTop from '../Botones/BotonBarraTop';
import CartContador from '../Cart/CartContador'
import './navbar.css';
import { Link } from 'react-router-dom'
import { ProductContext } from '../Context';



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
        const { pintarBtnBar, toggleModalRegistro, 
                toggleModalLogin, actualizarSesionState  } = this.context;
        return (
            <nav  className="   container-fluid 
                                navbar-dark bg-dark 
                                navbar-expand-md 
                                mr-0 mt-0 ml-0 mb-0
                                pr-0 pt-0 pl-0 pb-0
                                fixed-top"
                                
                                >
                <div className="row  
                                mr-0 mt-0 ml-0 mb-0
                                pr-0 pt-0 pl-0 pb-0" >  
                    <div className="col-12 
                                    col-md-4 
                                    mr-0 mt-0 ml-0 mb-0
                                    pr-0 pt-0 pl-0 pb-0"> {/*   inicio primera columna */}
                        <div className="row 
                                        mr-0 mt-0 ml-0 mb-0
                                        pr-0 pt-0 pl-0 pb-0">
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
                        <div className="collapse navbar-collapse" 
                                    id="menu-principal">
                            <ul className="navbar-nav  ">
                                <li className="nav-item
                                               mr-0 mt-0 ml-0 mb-0
                                               pr-0 pt-0 pl-0 pb-0">
                                    <button      type="button" 
                                            className="btn text-white"
                                          data-toggle="modal" 
                                          data-target="#exampleModal">
                                         <i className="fas fa-search"/>
                                    </button>
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
                                             datos={dato} />
                                       </li>
                                     )  
                                  })}
                                {
                                    pintarBtnBar ? 
                                    <React.Fragment>
                                        <li className="nav-item" >
                                            <a    href="#top"  
                                               onClick={()=>{
                                                        toggleModalLogin()}} >
                                                Ingresar
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a     href="#top" 
                                                onClick={()=>{
                                                        toggleModalRegistro() }}>
                                                Registrarse 
                                            </a>
                                        </li>            
                                    </React.Fragment>
                                    : 
                                    <li className="nav-item">
                                    <User
                                        actualizarSesionState={actualizarSesionState}/>  
                                    </li>
                                }
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
Navbar.contextType= ProductContext;

export default Navbar;