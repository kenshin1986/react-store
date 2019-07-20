import React, { Component } from 'react';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import SlideDetails from './Slide/SlideDetails'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {_id, marca, imagen, info, precio, nombre, inCart}= value.detailProduct;
                    return (
                        <div className="container py-5">
                        {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center 
                                        text-slanted text-blue my-5">
                                    <h1>{nombre}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3
                                text-capitalize">
                                    <SlideDetails
                                        id="mid2"
                                        img= {imagen}
                                    />
                                 </div>
                                 
                                 
                                 {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3
                                text-capitalize">
                                    <h2>modelo: {nombre}</h2>
                                    <h4 className="text-title 
                                            text-uppercase text-muted mt-3 mb-2">
                                        marca : <span className="text-uppercase"> 
                                            {marca} </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            precio : <span>$</span>
                                            {precio}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold
                                            mt-3 mb-0">
                                       detalles del producto:
                                     </p>
                                     <p className="text-muted lead">
                                        {info}
                                     </p>
                                     {/* buttons */}
                                     <div>
                                            <Link to='/ProductList'>
                                                <ButtonContainer>
                                                   seguir comprando
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer 
                                                cart
                                                disabled={inCart ? true : false}
                                                onClick={() =>{
                                                    value.addToCart(_id);
                                                    value.openModal(_id);
                                                }}
                                            >
                                                {inCart ? "inCart" : "add to cart"}
                                            </ButtonContainer>
                                     </div>
                                </div>
                                
                            </div>
                        </div>
                    ) 
                }}
            </ProductConsumer>
        );
    }
}

