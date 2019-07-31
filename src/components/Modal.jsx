import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from './Context';
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom';

export default class Modal extends Component {

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { imagen, nombre, precio } = value.modalProduct;
                        if (!modalOpen) {
                            return null;
                        } else {    
                           return(
                            <ModalContainer>
                                <div className="container">
                                        <div className="row">
                                            <div  id="modal" 
                                                    className="col-8 mx-auto 
                                                    col-md-6 col-lg-4
                                                    text-center text-capitalize p-5" 
                                                >
                                                <h5 className="text-muted"> producto 
                                                    <strong> agregado</strong> al carrito</h5>
                                                <img src={imagen} className="img-fluid"
                                                        alt="product" />
                                                    <h5> {nombre} </h5>
                                                    <h5 className="text-muted">
                                                         precio : $ {precio}
                                                    </h5>
                                                    <Link to="/ProductList">
                                                        <ButtonContainer onClick={()=>closeModal()}>
                                                            seguir comprando
                                                        </ButtonContainer>
                                                    </Link>
                                                    <Link to="/cart">
                                                        <ButtonContainer cart onClick={()=>closeModal()}>
                                                            ir al carrito 
                                                        </ButtonContainer>
                                                    </Link>
                                            </div>
                                        </div>
                                    </div>
                            </ModalContainer>
                           ); 
                        }
                    }
                }
            </ProductConsumer>
        );
    }
}
const ModalContainer = styled.div`
    position: fixed;
    top: 35px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    aling-items:center;
    justify-content: center;
    #modal{
        background: var(--mainWhite);
    }
`;

