import React, {Component} from 'react';


export default class FormIngreso extends Component {

  handleSubmit = this.handleSubmit.bind(this);
  userRef = React.createRef();
  passRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();
    const datos = {
      user: this.userRef.current.value,
      pass: this.passRef.current.value
    }
    this.props.login(datos);
  }
  handleSubmit(event) {

    event.preventDefault();
  }
  render() {
    return (
    <div className="container-fluid">
           <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center"><strong>Login</strong></h5>
              <form className="form-signin" onSubmit={this.obtenerDatos}>
                <div className="form-label-group">
                  <input type="email" id="inputCorreo" className="form-control my-3" placeholder="TuCorreo@TuDominio.com " required="required" ref={this.userRef}/>
                  {/* <label htmlFor="inputCorreo">
                    Correo Electronico
                  </label> */}
                </div>

                <div className="form-label-group">
                  <input type="password" id="inputPass" className="form-control my-1" placeholder="Contraseña" required="required" ref={this.passRef}/>
                  {/* <label htmlFor="inputPass">Contraseña</label> */}
                </div>

                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                  <label className="custom-control-label" htmlFor="customCheck1">Recordar Contraseña</label>
                </div>
                
                    <button className="btn  btn-dark btn-sm text-capitalize mr-4" 
                            type="submit">
                            ingresar
                    </button>
                    <button className="btn  btn-dark btn-sm text-capitalize"
                            onClick={()=>{
                            this.props.cerrar()
                                                            
                            }}>
                           cancelar
                    </button>
                
              </form>
            </div>
          </div>
    </div>)
  }
}
