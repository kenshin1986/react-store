import React, { Component } from 'react';
import Logo from './Logo';
import BotonBarraTop from './BotonBarraTop';
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'
import styled from 'styled-components'
import Search from './Search.jsx';
import Login from './login';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className=" bg-dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2 nav justify-content-center py-2" >
                            <Logo />
                        </div>
                        <div className="col-sm-3 " >
                            <BotonBarraTop/>
                        </div>
                        {/* termina boton */}
                        <div className="col-sm-5 mx-auto " >
                            <div className="row">
                                <div className="col-sm-6 mx-auto ">
                                    <div className="container-fluid">
                                        <Search />
                                    </div>
                                </div>
                                <div className="col-sm-6 mx-auto ">
                                    <div className="py-3 pt-sm-5 pt-md-4 pt-xl-3 pr-xl-5">
                                        {/* <CarContador/> */}

                                        <Link to="/cart" className="container-fluid">
                                            <ButtonContainer>
                                                <span className="container-fluid">
                                                    <i className="fas fa-cart-plus" />
                                                </span>
                                                my cart
                                                </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-2" >

                            <Login />



                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform: capitalize;
    }
`;

export default Navbar;
