import React from 'react';
import {Link} from 'react-router-dom'



export default function CartTotals ({value}) {
   const{cartSubtotal, cartTax, cartTotal, clearCart, comprarCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto
                            col-sm-8 text-capitalize text-right">
                        <Link to="/ProductList">
                            <button className="btn btn-outline-danger text-uppercase
                                mb-3 px-5 mr-2" 
                                type="button"
                                onClick={() => clearCart()}
                                >
                                    Eliminar Articulos
                                </button>
                        </Link>
                        <button className="btn btn-outline-dark text-uppercase
                                mb-3 px-5" 
                                type="button"
                                onClick={() => comprarCart()}
                                >
                                    Comprar
                                </button>
                        <h5>
                            <span className="text-title">
                                subtotal : 
                            </span> <strong>$ {cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                IVA : 
                            </span> <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total : 
                            </span> <strong>$ {cartTotal}</strong>
                        </h5>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}