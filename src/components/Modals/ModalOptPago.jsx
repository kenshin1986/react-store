import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../Context';
import { Link } from 'react-router-dom'

import FormIngreso from '../Formularios/FormIngreso';



export default class ModalOptPago extends Component {

    render() {
        const {ModalOptPagoState,  toggleModalOptPago}= this.context;
       
        return (
                !ModalOptPagoState ?  null 
                    :   <ModalContainer  onClick={ 
                        (e) =>{
                            if(  e.target.className === 'sc-bxivhb dhUoWh' ||
                                    e.target.id === 'cont' ||
                                    e.target.id === 'fila'  ||
                                    e.target.id === 'modal'){ 
                                        toggleModalOptPago()
                                        
                            }
                        }} >
                            <div className="container container-fluid" id="cont">
                                <div className="row " id="fila">
                                    <div        id="modal"
                                         className="col-12 mx-auto 
                                                    col-md-6 
                                                    text-center 
                                                    text-capitalize p-5 mt-3">

                                        <div className="card">
                                        <div className="card-header
                                                        text-left 
                                                        text-capitalize ">
                                            opciones de pago
                                        </div>
                                        <div className="card-body">
                                            <h4 class=" card-title
                                                        text-center 
                                                        text-capitalize">
                                                        elige el metodo de pago que mas te agrade
                                            </h4>
                                            <Link to="/paypal">
                                            <a href="#top" className="btn btn-block btn-outline-dark mb-3"
                                                    onClick={()=>{
                                                        toggleModalOptPago()
                                                }}>
                                                 <i className="fab fa-cc-paypal
                                                              fa-3x "/>
                                            </a> 
                                            </Link>
                                            <a href="#top" className="btn btn-block btn-outline-dark mb-3"
                                                    onClick={()=>{
                                                        
                                                }}>
                                                Otro metodo
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
ModalOptPago.contextType= ProductContext;

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

