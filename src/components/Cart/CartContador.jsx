import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { ProductContext } from '../Context'

export default class CartContador extends Component {
  render() {
        const { cantidad } = this.context;
        return (
                <Link to="/cart">
                    <span className="">
                        <span className="badge ">
                                    <i className="fas fa-shopping-cart 
                                                ml-lg-1  mr-2"/>
                            <span className="mb-5 mt-0">
                                {cantidad}
                            </span>
                        </span>
                    </span>
                </Link>
        );
    }
}
CartContador.contextType= ProductContext;
