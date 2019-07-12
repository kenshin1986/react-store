import React, { Component } from 'react'

export default class Search extends Component {
   
    render() { 
        return ( 
            <form className="navbar-form navbar-left" action="/action_page.php">
                <div className="form-group">
                    <input type="text" className="form-control mb-0 mt-3" placeholder="Ej: zapatos rojos"/>
                    <button type="submit" className="btn btn-primary mt-1 mb-0">Buscar</button>
                </div>
               
            </form>
         );
    }
}
 
