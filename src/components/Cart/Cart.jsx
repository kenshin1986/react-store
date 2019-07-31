import React, { Component } from 'react';
import Title from '../../components/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../components/Context'
import CartList from './CartList'
import CartTotals from './CartTotals'


export default class Cart extends Component {
    render() {
        return (
            <section className="mt-5 pt-5 mb-1">
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="tu carrito" title="" />
                                    <CartColumns />
                                    <CartList
                                        value={value}
                                    />
                                    <CartTotals
                                        value={value}
                                    />
                                   
                                </React.Fragment>
                            );
                        }
                        else{
                           return( <EmptyCart />)
                        }
                    }}
                </ProductConsumer>
               
            </section>
        );
    }
}
