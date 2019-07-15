import React, { Component } from 'react'

export default class Search extends Component {
   
    render() { 
        return ( 
                <form className="busqueda" action="/action_page.php">
                   <div className="input-group 
                                    mr-xl-0 ml-xl-0
                                        mr-lg-0 ml-xl-0
                                        mr-md-0">
                        <input className="form-control"    
                                         type="text" 
                                    placeholder="¿Que zapatos buscas?" required/>
                            <div className="input-group-append">
                                <input type="submit" value="Buscar"
                                        className="btn btn-outline-light px-2 "/>
                        </div>
                   </div>
                    
                    {/* <button className="btn btn-outline-light" type="submit">
                            <i class="fas fa-search"></i>
                    </button> */}
                </form>
         );
    }
}
 
