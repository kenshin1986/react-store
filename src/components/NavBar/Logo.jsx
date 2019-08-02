import React from 'react';
import { Link } from 'react-router-dom'
import icono from '../../img/icono.png';

const Logo = () => (
   
    <Link to="/">
        <img src={icono} className=" img-fluid mt-lg-0
                                    navbar-brand"
        alt="Logo"></img>

    </Link>
          

)


export default Logo;