import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../Context';

import FormIngreso from '../Formularios/FormIngreso';



export default class ModalLogin extends Component {

    render() {
        const {modalLoginState, login,
                toggleModalLogin, actualizarRedirectPago}= this.context;
       
        return (
                !modalLoginState ?  null 
                    :   <ModalContainer  onClick={ 
                        (e) =>{
                            if(  e.target.className === 'sc-bxivhb dhUoWh' ||
                                    e.target.id === 'cont' ||
                                    e.target.id === 'fila'  ||
                                    e.target.id === 'modal'){ 
                                toggleModalLogin()
                                actualizarRedirectPago()
                            }
                        }} >
                            <div className="container container-fluid" id="cont">
                                <div className="row " id="fila">
                                    <div        id="modal"
                                         className="col-12 mx-auto 
                                                    col-md-6 
                                                    text-center 
                                                    text-capitalize p-5 mt-3">
                                                <FormIngreso 
                                                  login={login}
                                                 cerrar={toggleModalLogin} 
                                                 actualizarRedirectPago={actualizarRedirectPago}    
                                                 />
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
        );
    
    }
}
ModalLogin.contextType= ProductContext;

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

