import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../Context';

export default class ModalOpcion extends Component {

    render() {
        const { modalOpcionState, toggleModalRegistro, 
                toggleModalOpciones, toggleModalLogin, 
                toggleModalnoRegistro, actualizarRedirectPago } = this.context;
        return (
            !modalOpcionState ?  null 
            :  
            <ModalContainer  onClick={ 
                (e) =>{
                    if(  e.target.className === 'sc-bxivhb dhUoWh' ||
                            e.target.id === 'cont' ||
                            e.target.id === 'fila' ){ 
                            toggleModalOpciones()
                            actualizarRedirectPago()
                    }
                }} >
                    <div className="container container-fluid" id="cont">
                        <div className="row " id="fila">
                            <div       id="modal" 
                                className="col-12 mx-auto 
                                    col-md-6 
                                    text-center text-capitalize p-5 mt-3">
                            <div className="row mt-5  mx-auto ">
                                <div className="col-12 ">
                                    <a href="#top" className="btn btn-block btn-outline-light mb-3"
                                            onClick={()=>{
                                                toggleModalLogin();
                                                toggleModalOpciones()
                                                actualizarRedirectPago()
                                         }}>
                                        Ingresar
                                    </a> 
                                </div>
                                <div className="col-12 ">
                                    <a href="#top" className="btn btn-block btn-outline-light mb-3"
                                            onClick={()=>{
                                                toggleModalRegistro()
                                                toggleModalOpciones()
                                                actualizarRedirectPago()
                                                    }}>
                                            Registrarse 
                                    </a>  
                                </div>
                                <div className="col-12 ">
                                    <a href="#top" className="btn btn-block btn-outline-light mb-3" onClick={()=>{
                                            toggleModalnoRegistro()
                                            toggleModalOpciones()
                                            actualizarRedirectPago()
                                            }}>
                                        Comprar Sin Registrarse
                                    </a> 
                                </div>
                                <div className="col-12 ">
                                    <a href="#top" className="btn btn-block btn-outline-light mb-3"
                                            onClick={()=>{
                                                toggleModalOpciones()}}>
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
ModalOpcion.contextType= ProductContext;
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

