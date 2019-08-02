import React, { Component } from 'react'
import Product from './Product'
import Title from '../Title'
import { ProductConsumer } from '../Context'
// import FondoCambiante from './FondoCambiante';


export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment> 

                <div className="mb-1 mt-5 pt-5">
                 {/* <FondoCambiante /> */}
                    <div className="container">
                        <Title className="our" title="productos" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product._id}
                                            product={product} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                   
                </div>
            </React.Fragment>
        );
    }
}


