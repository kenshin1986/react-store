import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import FormIngreso from '../Formularios/FormIngreso';

export default class ModalLogin extends Component {
    busquedaRef = React.createRef();

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalLoginOpen } = value;
                    if (!modalLoginOpen) {
                        
                    } else {
                        return (
                            <React.Fragment>
                                {/* <!-- The Modal Login--> */}
                                <div className="modal" id="login">
                                    <div className="modal-dialog modal-sm">
                                        <div className="modal-content">
                                            {/* <!-- Modal Header --> */}
                                            <div className="modal-header ">
                                                <button type="button" 
                                                        className="close" 
                                                        data-dismiss="modal"
                                                        id="cerrarLogin">
                                                        &times;
                                                </button>
                                            </div>
                                            {/* <!-- Modal body --> */}
                                            <div className="modal-body bg-dark">
                                                <FormIngreso 
                                                login={value.login} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    }
                }

                }
            </ProductConsumer>
        );
    }
}
