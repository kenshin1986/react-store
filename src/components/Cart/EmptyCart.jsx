import React from 'react';
import {Link} from 'react-router-dom'

export default function EmptyCart(){
    return(
        <div className="container mt-4 mb-4 pb-4 pt-4">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Tu carrito esta vacio</h1>
                    <Link to="/productlist" className=" btn btn-outline-Dark text-dark">
                       <h2 >Ver Mas</h2><span><strong>Productos</strong></span> 
                    </Link>
                </div>
            </div>
        </div>
    )
}