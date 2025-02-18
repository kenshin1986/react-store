import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../Context'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

export default class Product extends Component {

    aviso = () =>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          
          Toast.fire({
            type: 'success',
            title: 'Agregado Al Carrito'
          })
    }
    render() {
        const {_id, nombre,  imagen, precio, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md6 col-lg-3
                my-3">
              <div className="card" >
                <ProductConsumer>
                    {value => ( 
                      
                        <div className="img-container p-5" 
                            onClick={()=> 
                                value.handleDetail(_id) 
                            }
                        >   
                        <Link to="/details">
                            <img src={imagen} alt="product" className="card-img-top"/>
                            <span className="btn btn-outline-blue 
                            text-capitalize text-muted"
                            > ver detalles</span>
                        </Link>
                        <button className="cart-btn" 
                        disabled={ inCart ? true : false} 
                         onClick={()=>{
                            value.addToCart(_id);
                            value.openModal(_id);
                            value.suma();
                            this.aviso();
                        }}>
                        {inCart ? (
                            <p className="text-capitalize mb-0" disabled>
                        {" "}
                        agregado</p>
                        ):(
                        <i className="fas fa-cart-plus"/>
                        )}

                        </button>
                    </div>
                    )}
                     
                </ProductConsumer>
                {/*card footer */}
                    <div className="card-footer d-flex
                        justify-content-between">
                            <p className="aling-self-center mb-0">
                                {nombre}
                            </p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">$</span>
                                {precio}
                            </h5>
                        </div>
              </div> 
            </ProductWrapper>
        );
    }
}
Product.proptype= {
        product:PropTypes.shape({
            _id:PropTypes.number,
            imagen:PropTypes.string,
            nombre:PropTypes.string,
            precio:PropTypes.number,
            inCart:PropTypes.bool
        }).isRequired
}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        tansition:all 0s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
        transition: all 0s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-Shadow: 2px 2px 5px 0px rgba(0,0,0.02); 
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
    .cart-btn{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0; 
        /** transform: translate(100%, 100%);
        transition: all 1s linear; **/
    }
    .img-container:hover .cart-btn{
        transform: translate(0, 0);
    }
    .cart-btn:hover{
        color:var(--mainBlue);
        cursor: pointer;
    }
`;