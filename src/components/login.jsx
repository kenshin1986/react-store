import React, { Component } from 'react';
import Ingreso from './formularioIngreso';

import Registro from './formRegistro';

export default class Login extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                    <div className="row ">
                        <div className="col-xl-6 ">
                            <button type="button" 
                                        className="btn btn-outline-light
                                            ml-xl-3 mt-xl-0 
                                            mt-lg-0 
                                            mt-2
                                             btn-xs-block" type="button"
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
                            </div>
                        <div className="col-xl-6">
                                    {/* <!-- Button to Open the Modal --> */}
                        <button type="button" 
                                className="btn btn-outline-light btn-xs-block
                                            mt-xl-0 
                                            mt-lg-0 
                                            mt-2" type="button"
                                data-toggle="modal" data-target="#registro">
                            Registrarse
                        </button>

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
                        </div>
                    </div>
        </React.Fragment>
        )
    }
}

