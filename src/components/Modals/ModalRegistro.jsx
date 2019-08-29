import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../Context';
import FormRegistro from '../Formularios/FormRegistro';



export default class ModalRegistro extends Component {

    render() {
        const { modalRegistroState, registrar,
                toggleModalRegistro, actualizarRedirectPago}= this.context;
        return (

            !modalRegistroState ?  null 
                    :
                    <ModalContainer  onClick={ 
                        (e) =>{
                            if(  e.target.className === 'sc-bxivhb dhUoWh' ||
                                    e.target.id === 'cont' ||
                                    e.target.id === 'fila'  ||
                                    e.target.id === 'modal'){ 
                                    toggleModalRegistro()
                                    actualizarRedirectPago()
                            }
                        }} >
                            <div className="container container-fluid" id="cont">
                                <div className="row" id="fila">
                                    <div        id="modal" 
                                         className="col-12 mx-auto 
                                                    col-md-6 
                                                    text-center text-capitalize 
                                                    p-5 mt-2">
                                    <FormRegistro
                                                registrar={registrar}
                                                   cerrar={toggleModalRegistro}
                                    actualizarRedirectPago={actualizarRedirectPago}  />
                            </div>
                        </div>
                    </div>
                </ModalContainer>
           
        );
    }
}
ModalRegistro.contextType= ProductContext;
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

