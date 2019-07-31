import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../Context'


export default class CartContador extends Component {

     
    render() {
        return (
            <ProductConsumer>
                {value => {
                    return (
                        <Link to="/cart">
                            <span className="">
                                <span className="badge ">
                                    <i className="fas fa-shopping-cart ml-lg-1  mr-2"></i>{value.cantidad}</span>
                            </span>

                        </Link>

                    )
                }

                }

            </ProductConsumer>


        );
    }
}
