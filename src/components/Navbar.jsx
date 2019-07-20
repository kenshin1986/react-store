import React, { Component } from 'react';
//import {Switch, Route} from 'react-router-dom';
import axios from 'axios'
import Logo from './Logo';
import BtnProducts from './BtnProducts'
import BotonBarraTop from './BotonBarraTop';
import ModalIngreso from './ModalLogin'
import ModalRegistro from './ModalRegistro'
import { Link } from 'react-router-dom'
import Search from './Search.jsx';
//import {datos} from './datos.json'


class Navbar extends Component {
   state ={
          datos:[],
   }
   componentDidMount(){
       this.obtenerDatosBtones();
   }
   obtenerDatosBtones =() => {
        axios.get(`http://192.168.1.62:3000/agrupaciones`)
    
        .then(res => {

           console.log(res.data.agrupaciones[0].generos)
            this.setState({
               datos: res.data.agrupaciones
            })
        })
   }

    render() {
        return (
           <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid ">
                   <div className="row container-fluid  ml-0 mr-0">
                       <div className=" col-6
                                    col-sm-7 bg-dark
                                    col-lg-2">
                        <Logo /> 
                       </div>
                       <div className="col-3 mt-2
                                    col-sm-2 ml-sm-4 mt-sm-3
                                    ml-md-5 pl-md-5 
                                    col-md-1 order-lg-2 ml-lg-0 mr-lg-2
                                    mr-xl-0">
                              <Search />
                           </div>
                        <div className="col-3 mt-2
                                        col-sm-2 ml-sm-0 mt-sm-3
                                         col-lg-1 mr-lg-0 ml-lg-0 order-lg-1
                                         col-xl-2 ">
                                <button type="button" className=" navbar-toggler "
                                        data-toggle="collapse" data-target="#menu-principal"
                                        aria-controls="menu-principal" aria-expanded="false"
                                        aria-label="Desplegar menu de navegacion">
                                        <span className="navbar-toggler-icon "></span>
                                </button>
                        </div>
                        <div className="col-12
                                         col-lg-7 mt-lg-2 order-lg-3 
                                         mr-xl-0">
                            <div className="collapse navbar-collapse" id="menu-principal">
                                <ul className="navbar-nav nav-justified">
                                    <li className="nav-item 
                                                    mt-3
                                                    mt-sm-4
                                                    mt-lg-2 mr-lg-4
                                                    mr-xl-5 ">
                                        <BtnProducts/>
                                    </li>
                                   { this.state.datos.map((dato, i)=>{
                                       console.log('en el map '.dato)
                                        return(
                                        <li className="nav-item 
                                                    mt-2 mr-lg-2 key={i}">
                                            <BotonBarraTop
                                                  datos={dato}
                                                   
                                                   
                                            />
                                         </li>
                                       )  
                                    })}
                                    <li className="nav-item 
                                                    mt-2 mr-lg-2 ml-lg-3 ml-xl-5">
                                        <ModalIngreso />
                                    </li>
                                    <li className="nav-item 
                                                    mt-2  mr-lg-2">
                                        <ModalRegistro />
                                    </li>
                                    <li className="nav-item mt-2 mb-2 ml-xl-5">
                                    <div className="container">
                                        <Link to="/cart">
                                            <span className="btn btn-outline-light btn-block textAlign: center">
                                                 <i className="fas fa-shopping-cart"></i>
                                            </span>
                                        </Link>
                                    </div>
                                    
                                    </li>
                                </ul>
                            </div>
                        </div>
                   </div>
                </div>
           </nav>
        );
    }
}

// const NavWrapper = styled.nav`
//     background: var(--mainBlue);
//     .nav-link{
//         color: var(--mainWhite)!important;
//         font-size:1.3rem;
//         text-transform: capitalize;
//     }
// `;


export default Navbar;
