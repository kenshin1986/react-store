import React, { Component } from 'react'

export default class Search extends Component {
   
    render() { 
        return ( 
                <React.Fragment>
                <button type="button" className="btn btn-outline-light" 
                        data-toggle="modal" data-target="#exampleModal">
                        <i className="fas fa-search"></i>
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" 
                        role="dialog" aria-labelledby="exampleModalLabel" 
                            aria-hidden="true">
                    <div className="modal-dialog" role="document bg-dark">
                        <div className="modal-content">
                        
                        <div className="modal-body bg-dark">
                            <form className="busqueda" action="/action_page.php">
                                <div className="input-group">
                                        <input className="form-control"    
                                                        type="text" 
                                                        
                                                    placeholder="¿Que Artículo buscas?" required autoFocus/>
                                        <div className="input-group-append">
                                            <input type="submit" value="Buscar"
                                                className="btn btn-outline-light px-2 "/>
                                        </div>
                                </div>
                                    
                                    {/* <button className="btn btn-outline-light" type="submit">
                                            <i class="fas fa-search"></i>
                                    </button> */}
                            </form>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                        </div>
                    </div>
                </div>
                </React.Fragment>
         );
    }
}
 
