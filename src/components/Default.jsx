import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container">
               <div className="row"></div>
               <div className="col-10 mx-auto text-center text-title
               text-uppercase pt-5"></div>
               <h1 className="display-3">404 </h1>
               <h1>error</h1>
               <h2>page not found</h2>
               <h3>the request URL was not found <span className="text-danger">
                   {this.props.location.pathname}
               </span>{" "}</h3>
            </div>
        );
    }
}

export default Default;
