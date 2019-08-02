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
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12  col-lg-12 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Ingresar</h5>
              <form className="form-signin" onSubmit={this.obtenerDatos}>
                <div className="form-label-group">
                  <input type="email" id="inputCorreo" className="form-control" placeholder="Ej- mundo@gmail.com " required="required" ref={this.userRef}/>
                  <label htmlFor="inputCorreo">
                    Correo Electronico
                  </label>
                </div>

                <div className="form-label-group">
                  <input type="password" id="inputPass" className="form-control" placeholder="Contraseña" required="required" ref={this.passRef}/>
                  <label htmlFor="inputPass">Contraseña</label>
                </div>

                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                  <label className="custom-control-label" htmlFor="customCheck1">Recordar Contraseña</label>
                </div>
                
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" 
                            type="submit">
                            Ingresar
                    </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
