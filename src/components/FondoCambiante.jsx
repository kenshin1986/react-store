import React, { Component } from 'react';
import './fondoCambiante.css';
import background4 from '../img/background4.jpg'
import background2 from '../img/background2.jpg'
import background from '../img/background.jpg'
import background3 from '../img/background3.jpg'



const FondoCambiante = () => {
    return ( 
            <React.Fragment>
                <div id="fondo1">
                    <img src={background4} alt="New York"/>
                </div>
                <div id="fondo2">
                    <img src={background} alt="New York"/>    
                </div>
                <div id="fondo3">
                    <img src={background2} alt="New York"/>  
                </div>
                <div id="fondo4">
                    <img src={background3} alt="New York"/>  
                </div>
            </React.Fragment> );
}
 
export default FondoCambiante;