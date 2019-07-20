import React, { Component } from 'react'

class BotonBarraTop extends Component {
        state = {  }
        render() { 
                const {  datos } = this.props;
                return ( 
                        <React.Fragment>
                                <div className="dropdown">
                                        <button type="button" 
                                                className="btn btn-outline-light  dropdown-toggle
                                                        btn-block 
                                                        mr-xl-0 ml-xl-0
                                                        mr-lg-0 ml-xl-0 
                                                        mr-md-0" 
                                                        
                                                        data-toggle="dropdown">
                                                {datos.btnPadre}
                                        </button>
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

