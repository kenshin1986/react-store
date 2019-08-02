import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import FormRegistro from '../Formularios/FormRegistro';

export default class ModalRegistro extends Component {
    busquedaRef = React.createRef();
   
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalRegistroOpen } = value;
                       if (!modalRegistroOpen){
                            return null;
                        } else {    
                           return(
                            <React.Fragment>
                            {/* <!-- The Modal Login--> */}
                                <div className="modal" id="registro">
                                    <div className="modal-dialog modal-md">
                                        <div className="modal-content">
                                            {/* <!-- Modal Header --> */}
                                            <div className="modal-header ">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            {/* <!-- Modal body --> */}
                                            <div className="modal-body bg-dark">
                                                <FormRegistro />
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
