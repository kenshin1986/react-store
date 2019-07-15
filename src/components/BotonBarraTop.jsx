import React from 'react'

const BotonBarraTop = (props) => (
        <React.Fragment>
            <div className="dropdown">
                        <button type="button" 
                        className="btn btn-outline-light  dropdown-toggle
                                btn-xs-block 
                                mr-xl-0 ml-xl-0
                                mr-lg-0 ml-xl-0 
                                mr-md-0" 
                                type="button"
                                data-toggle="dropdown">
                        {props.botonpadre}
                        </button>
                        <div className="dropdown-menu">
                                <a className="dropdown-item" href="#top">{props.boton1}</a>
                                <a className="dropdown-item" href="#top">{props.boton2}</a>
                                <a className="dropdown-item" href="#top">{props.boton3}</a>
                        </div>
                        </div>
                      
        </React.Fragment>

    
    )


export default BotonBarraTop