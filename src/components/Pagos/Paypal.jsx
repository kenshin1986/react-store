import React, { Component } from 'react';
import { ProductContext } from '../Context';
import {Redirect} from 'react-router-dom'
import CartColums from '../Cart/CartColumns'

class Paypal extends Component {
    
    render() { 
        const { paypalState}= this.context;
            return (
                !paypalState ? 
                 <Redirect to="/" />
                :  
                <div  className="mt-5 pt-5">
                    <CartColums/>
                </div>
                
            );
    }
}
Paypal.contextType= ProductContext;
export default Paypal;