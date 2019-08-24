import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';

export default class ModalOpcion extends Component {

    render() {
        return (
            <ProductConsumer>
            {(value) => {
                const { modalOpcionState, toggleModalRegistro, toggleModalOpciones,
                    toggleModalLogin, btnLogName, toggleModalnoRegistro } = value;
             
                if (!modalOpcionState) {
                    return null;
                } else { 
                    return(
                        <ModalContainer>
                            <div className="container">
                                 <div className="row">
                                    <div  id="modal" 
                                        className="col-12 mx-auto 
                                                    col-md-6 
                                                    text-center text-capitalize p-5 mt-3">
                                             <div className="row mt-5  mx-auto ">
                                                    <div className="col-12 ">
                                                        <a href="#top" className="btn btn-block btn-outline-light mb-3"
                                                            onClick={()=>{
                                                                toggleModalLogin();
                                                                toggleModalOpciones()
                                                         }}>
                                                        {btnLogName}
                                                        </a> 
                                                   </div>
                                                   <div className="col-12 ">
                                                        <a href="#top" className="btn btn-block btn-outline-light mb-3"
                                                            onClick={()=>{
                                                                toggleModalRegistro();
                                                                toggleModalOpciones()
                                                                    }}>
                                                            Registrarse 
                                                        </a>  
                                                   </div>
                                                   <div className="col-12 ">
                                                        <a href="#top" className="btn btn-block btn-outline-light mb-3" onClick={()=>{
                                                            toggleModalnoRegistro();
                                                            toggleModalOpciones()
                                                            }}>Comprar Sin Registrarse
                                                        </a> 
                                                   </div>
                                                   <div className="col-12 ">
                                                        <a href="#top" className="btn btn-block btn-outline-light mb-3"
                                                            onClick={()=>{
                                                                toggleModalOpciones()
                                                                    }}>
                                                            Cancelar
                                                        </a> 
                                                   </div>
                                       </div>
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
    z-index: 1000;
    background: rgba(0,0,0,0.8);
    display: flex;
    aling-items:center;
    justify-content: center;
    #modal{
        background:  rgba(0,0,0,0.8);
    }
`;

