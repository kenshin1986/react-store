import React, { Component } from 'react';
import Ingreso from './formularioIngreso';

class ModalIngreso extends Component {
   
    render() { 
        return ( 
                <React.Fragment>
                    <button type="button" className="btn btn-outline-light btn-block" 
                                        data-toggle="modal" data-target="#login">
                        Ingresar
                    </button>
                    {/* <!-- The Modal Login--> */}
                    <div className="modal" id="login">
                                    <div className="modal-dialog modal-sm">
                                        <div className="modal-content">
                                            {/* <!-- Modal Header --> */}
                                            <div className="modal-header ">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            {/* <!-- Modal body --> */}
                                            <div className="modal-body bg-dark">
                                                <Ingreso />
                                            </div>
                                           {/* <!-- Modal footer --> */}
                                            {/* <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div> */}
                                        </div>
                                    </div>
                                </div>
                </React.Fragment>
         );
    }
}
 
export default ModalIngreso;