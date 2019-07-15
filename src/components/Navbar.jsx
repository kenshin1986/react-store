import React, { Component } from 'react';
import Logo from './Logo';
import BtnProducts from './BtnProducts'
import BotonBarraTop from './BotonBarraTop';
import { Link } from 'react-router-dom'
import Search from './Search.jsx';
import Login from './login';

class Navbar extends Component {
    state = {}
    render() {
        return (
           <div className="navegacion bg-dark">
               <nav className="nav-principal navbar navbar-expand-md navbar-light bg-faded">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#nav_principal" aria-label="Mostrar Menu">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <Logo />
                    <div className="container">
                        <div className="collapse navbar-collapse w-100" id="nav_principal">
                        <ul className="nav nav-justified  w-100 flex-column flex-sm-row">
                            <li className="nav-item 
                                    mt-xl-2
                                    mt-lg-2
                                    mt-4">
                                 <BtnProducts/>
                            </li>
                            <li className="nav-item">
                                <ul className="nav nav-justified  w-100 flex-column flex-sm-row">
                                    <li className="nav-item mt-2">
                                        <BotonBarraTop
                                        botonpadre="Hombres"
                                        boton1="deportivos"
                                        boton2="casuales"
                                        boton3="veraniegos"
                                    />
                                    </li>
                                   
                                    <li className="nav-item mt-2">
                                        <BotonBarraTop
                                        botonpadre="Mujeres"
                                        boton1="deportivos"
                                        boton2="casuales"
                                        boton3="veraniegos"
                                    />
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item barraBusqueda mt-2 ">
                                <Search />
                            </li>
                            <li className="nav-item 
                                    mt-xl-2
                                    mt-lg-2
                                    mt-md-1
                                    mt-2">
                              <Login />
                            </li>
                            <li className="nav-item 
                                    mt-xl-2
                                    mt-lg-2
                                    mt-md-4
                                    mt-2">
                                <Link to="/cart">
                                    <span className="btn btn-outline-light">
                                            <i className="fas fa-cart-plus" />
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
               </nav>
           </div>
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
