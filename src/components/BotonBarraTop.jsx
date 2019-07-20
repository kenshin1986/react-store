import React from 'react'

const BotonBarraTop = (props) => (
        <React.Fragment>
            <div className="dropdown">
                        <button type="button" 
                        className="btn btn-outline-light  dropdown-toggle
                                btn-block 
                                mr-xl-0 ml-xl-0
                                mr-lg-0 ml-xl-0 
                                mr-md-0" 
                                data-toggle="dropdown">
                        {props.botonpadre}
                        </button>
                        <div className="dropdown-menu">
                                <a className="dropdown-item" href={props.link1}>{props.boton1}</a>
                                <a className="dropdown-item" href={props.link2}>{props.boton2}</a>
                                <a className="dropdown-item" href={props.link3}>{props.boton3}</a>
                                <a className="dropdown-item" href={props.link4}>{props.boton4}</a>
                        </div>
                        </div>
                      
        </React.Fragment>

    
    )


export default BotonBarraTop