import React, { Component } from 'react';


class Ingreso extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
        this.input0 = React.createRef();
        this.input1 = React.createRef();
        this.input2 = React.createRef();
        this.input3 = React.createRef();
        this.input4 = React.createRef();
        this.input5 = React.createRef();
        
		
	  }
	  
	  handleSubmit(event) {
		
		event.preventDefault();
	  }
    render() {
        return (
        			<div className="container-fluid mt-0">
					    <div className="row">
					      <div className="col-sm-12 col-md-12  col-lg-12 mx-auto">
					        <div className="card card-signin my-0">
					          <div className="card-body">
					            <h5 className="card-title text-center">Registro</h5>
					            <form className="form-signin" onSubmit={this.handleSubmit}>
                                    <div className="form-label-group my-2">
                                        <input type="text" 
                                                id="inputNombres" 
                                                className="form-control" 
                                                placeholder="Nombres" 
                                                required autoFocus
                                                ref={this.input0}	
                                                />
                                        {/* <label htmlFor="inputNombres">Nombres</label> */}
                                    </div>
                                    <div className="form-label-group my-2">
                                        <input type="text" 
                                                id="inputApellidos" 
                                                className="form-control" 
                                                placeholder="Apellidos" 
                                                required 
                                                ref={this.input1}	
                                                />
                                        {/* <label htmlFor="inputApellidos">Apellidos</label> */}
                                    </div>
                                    <div className="form-label-group my-2">
                                        <input type="email" 
                                                id="inputEmail" 
                                                className="form-control" 
                                                placeholder="Correo Electronico" 
                                                required 
                                                ref={this.input2}	
                                                />
                                        {/* <label htmlFor="inputEmail">Email address</label> */}
                                    </div>

                                    <div className="form-label-group my-2">
                                        <input type="password" 
                                                id="inputPassword" 
                                                className="form-control" 
                                                placeholder="Contraseña" 
                                                required
                                                ref={this.input3}
                                                />
                                        {/* <label htmlFor="inputPassword">Password</label> */}
                                    </div>
                                    <div className="form-label-group my-2">
                                        <input type="number" 
                                                id="inputCelular" 
                                                className="form-control" 
                                                placeholder="Celular" 
                                                required 
                                                ref={this.input4}	
                                                />
                                        {/* <label htmlFor="inputCelular">Celular</label> */}
                                        <div className="form-label-group my-2">
                                        <input type="text" 
                                                id="inputDireccion" 
                                                className="form-control" 
                                                placeholder="Direccion" 
                                                required 
                                                ref={this.input5}	
                                                />
                                        {/* <label htmlFor="inputDireccion">Direccion</label> */}
                                    </div>
                                    </div>

                                    
                                    <button className="btn btn-sm btn-primary btn-block text-uppercase" type="submit">Registrar</button>
                                </form>
					          </div>
					        </div>
					      </div>
					    </div>
					  </div>
            
        )
    }
}

export default Ingreso