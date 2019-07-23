import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class CartContador extends Component {

    
    render() {
       
        
        return (
           
                   <Link to="/cart">
                        <span className="">
                           <span className="badge ">
                           <i className="fas fa-shopping-cart ml-lg-1  mr-2"></i>x</span>
                        </span>
                        
                </Link> 
            
            
        );
    }
}
