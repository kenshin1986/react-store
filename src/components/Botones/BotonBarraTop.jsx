import React, { Component } from 'react'


class BotonBarraTop extends Component {
        state = {  }
        render() { 
                const {  datos } = this.props;
                return ( 
                        <React.Fragment>
                                <div className="dropdown">
                                        <a href="dropdown-menu"
                                                className="boton-desplegable dropdown-toggle " 
                                                        
                                                        data-toggle="dropdown">
                                                {datos.btnPadre}
                                        </a>
                                        <div className="dropdown-menu">
                                                        <a className="dropdown-item" href={datos.link1}>{datos.linkName1}</a>
                                                        <a className="dropdown-item" href={datos.link2}>{datos.linkName2}</a>
                                                        <a className="dropdown-item" href={datos.link3}>{datos.linkName3}</a>
                                                        <a className="dropdown-item" href={datos.link4}>{datos.linkName4}</a>
                                        </div>
                                </div>
                        </React.Fragment>
                 );
        }
}
 
export default BotonBarraTop;

