import React, { Component } from 'react';


class Registro extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input2 = React.createRef();
		this.input1 = React.createRef();
		
	  }
	  
	  handleSubmit(event) {
		
		event.preventDefault();
	  }
    render() {
        return (
        			<div className="container-fluid">
					    <div className="row">
					      <div className="col-sm-12 col-md-12  col-lg-12 mx-auto">
					        <div className="card card-signin my-5">
					          <div className="card-body">
					            <h5 className="card-title text-center">Sign In</h5>
					            <form className="form-signin" onSubmit={this.handleSubmit}>
					              <div className="form-label-group">
					                <input type="email" 
											id="inputCorreo" 
											className="form-control" 
											placeholder="Ej- mundo@gmail.com " 
											required 
											ref={this.input1}	
											/>
					                <label htmlFor="inputCorreo">Correo Electronico</label>
					              </div>

					              <div className="form-label-group">
					                <input type="password" 
											id="inputPass" 
											className="form-control" 
											placeholder="Contraseña" 
											required
											ref={this.input2}
											/>
					                <label htmlFor="inputPass">Contraseña</label>
					              </div>

					              <div className="custom-control custom-checkbox mb-3">
					                <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
					                <label className="custom-control-label" htmlFor="customCheck1">Recordar Contraseña</label>
					              </div>
					              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Ingresar</button>
					            </form>
					          </div>
					        </div>
					      </div>
					    </div>
					  </div>
            
        )
    }
}

export default Registro