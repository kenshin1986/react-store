import React, { Component } from 'react';


export default class FormNoRegistro extends Component {
  
        nombresRef = React.createRef();
        apellidosRef = React.createRef();
        emailRef = React.createRef();
        passRef = React.createRef(); 
        celularRef = React.createRef();
        dirRef = React.createRef();
	      
	  obtenerDatos=(e)=> {
		    e.preventDefault();
        const datos = {
          nombres: this.nombresRef.current.value,
          apellidos: this.apellidosRef.current.value,
          email: this.emailRef.current.value,
          pass: this.passRef.current.value,
          celular: this.celularRef.current.value,
          direccion: this.dirRef.current.value,
        }
        this.props.registrar(datos);
	  }
    render() {
        return (
        		<div className="container-fluid mt-0 ml-0 mr-0">
					<div className="card card-signin my-0">
					    <div className="card-body">
					        <h5 className="card-title text-center text-capitalize">
                                datos envio
                            </h5>
					        <form  className="form-signin" 
                                    onSubmit={this.obtenerDatos}>
                                <div className="form-label-group my-2">
                                    <input    type="text" 
                                                id="inputNombres" 
                                         className="form-control" 
                                       placeholder="Nombres" required 
                                            ref={this.nombresRef}/>
                                        {/* <label htmlFor="inputNombres">Nombres</label> */}
                                </div>
                                <div className="form-label-group my-2">
                                    <input    type="text" 
                                                id="inputApellidos" 
                                         className="form-control" 
                                       placeholder="Apellidos" required 
                                               ref={this.apellidosRef}/>
                                        {/* <label htmlFor="inputApellidos">Apellidos</label> */}
                                </div>
                                <div className="form-label-group my-2">
                                    <input    type="email" 
                                                id="inputEmail" 
                                         className="form-control" 
                                       placeholder="Correo Electronico" required 
                                               ref={this.emailRef}/>
                                        {/* <label htmlFor="inputEmail">Email address</label> */}
                                </div>
                                <div className="form-label-group my-2">
                                    <input    type="password" 
                                                id="inputPassword" 
                                         className="form-control" 
                                       placeholder="Contraseña" required
                                               ref={this.passRef} />
                                        {/* <label htmlFor="inputPassword">Password</label> */}
                                </div>
                                <div className="form-label-group my-2">
                                    <input    type="number" 
                                                id="inputCelular" 
                                         className="form-control" 
                                       placeholder="Celular" required 
                                               ref={this.celularRef}/>
                                        {/* <label htmlFor="inputCelular">Celular</label> */}
                                    <div className="form-label-group my-2">
                                        <input     type="text" 
                                                     id="inputDireccion" 
                                              className="form-control" 
                                            placeholder="Direccion" required 
                                                    ref={this.dirRef}/>
                                        {/* <label htmlFor="inputDireccion">Direccion</label> */}
                                    </div>
                                </div>
                                <button className="btn  btn-dark btn-sm text-capitalize mr-4" 
                                             type="submit">
                                        registrar
                                </button>
                                <button className="btn  btn-dark btn-sm text-capitalize"
                                          onClick={()=>{
                                                this.props.cerrar()}}>
                                     cancelar
                                </button>
                            </form>
					    </div>
					</div>
				</div>
            
        )
    }
}

