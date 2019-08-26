import React, { Component } from 'react'


class User extends Component {
    state = {}
    render() {
        const { actualizarSesionState } = this.props;
        return (
            <React.Fragment>
                <div className="dropdown">
                    <a href="dropdown-menu"
                        className="boton-desplegable dropdown-toggle "
                        data-toggle="dropdown">
                        <span className="badge text-white ">
                            <i className="far fa-user
                                      fa-1.5x fa-lg "/>
                        </span>
                    </a>
                    <div className="dropdown-menu mt-3 ">
                    <a className="dropdown-item mt-1 mr-lg-2 text-black" href="#top"  
                                onClick={()=>{
                                    actualizarSesionState() }}>
                         Salir
                      </a>
                        <a className="dropdown-item " href="#top">Aministrar</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default User;

