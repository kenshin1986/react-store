import React, { Component } from 'react';
import Title from '../../components/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductContext } from '../../components/Context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        const {cart} = this.context;
        return (
            <section className="mt-5 pt-5 mb-1">
                {
                    cart.length > 0 ?  
                        <React.Fragment>
                            <Title name="tu carrito" title="" />
                            <CartColumns />
                            <CartList
                                value={this.context} />
                            <CartTotals
                                value={this.context} />
                        </React.Fragment>
                    : <EmptyCart />
                }
            </section>
        );
    }
}
Cart.contextType= ProductContext;
