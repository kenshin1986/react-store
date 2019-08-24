import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';
import FormNoRegistro from '../Formularios/FormNoRegistro';



export default class ModalNoRegistro extends Component {

    render() {
        return (
            <ProductConsumer>
            {(value) => {
                const { opcionNoRegistro, cambiarOpcionNoRegistroModal } = value;
                       if (!opcionNoRegistro){
                    return null;
                } else { 
                    return(
                        <ModalContainer>
                            <div className="container">
                            
                                <div className="row">
                                
                                    <div  id="modal" 
                                        className="col-12 mx-auto 
                                                    col-md-6 
                                                    text-center text-capitalize p-5 mt-2" 
                                                >
                                                    <FormNoRegistro
                                                        cerrar={cambiarOpcionNoRegistroModal}
                                                      />
                                                    {/* <FormNoRegistro
                                                     registrar={value.registrar}
                                                     cerrar={} /> */}
                                                         {/* <FormIngreso 
                                                    login={value.login}
                                                    cerrar={value.cerrarLogin} /> */}
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

