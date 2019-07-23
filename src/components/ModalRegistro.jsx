import React, { Component } from 'react';
import Registro from './formRegistro';

class ModalRegistro extends Component {
    
    render() { 
        return (
            <React.Fragment>
                    <a href="registro" data-toggle="modal" data-target="#registro">
                     Registrarse
                    </a>
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
                                            <Registro />
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
 
export default ModalRegistro;