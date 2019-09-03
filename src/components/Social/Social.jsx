/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import './Social.css';
 
 class Social extends Component {
     state = {  }
     render() { 
         return ( 
            <div className="social">
                <ul className="flex-container column">
                    <li> <a href="##"  className="fab fa-facebook-f"></a></li>
                    <li> <a href="##"  className="fab fa-twitter"></a></li>
                    <li> <a href="##" className="fab fa-get-pocket"></a></li>
                    <li> <a href="https://m.me/Puritocodigo" target="blank" className="fab fa-facebook-messenger"></a></li>
                    <li> <a href="https://api.whatsapp.com/send?phone=51947256885&text=Hola%20como%20Estas" target="blank" className="fab fa-whatsapp"></a></li>
                    {/* <li> <a href="https://m.me/Puritocodigo" target="_blank" className="fab fa-facebook-messenger"></a></li>
                    <li> <a href="https://api.whatsapp.com/send?phone=51947256885&text=Hola%20como%20Estas" target="_blank" className="fab fa-whatsapp"></a></li> */}
                    <li> <a href="##" className="fab fa-google-plus-g"></a></li>
                    
                </ul>
            </div>
         );
     }
 }
  
 export default Social
 ;