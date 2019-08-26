import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

export default class CartTotals extends Component {
    aviso = () =>{ 
        const {clearCart, reset} = this.props.value;
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false,
          })
        swalWithBootstrapButtons.fire({
            title: ' Vaciar El Carrito?',
            text: "Perdera Su Lista De Productos!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, Vaciar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
                clearCart()
                reset()
                swalWithBootstrapButtons.fire(
                'Vaciado!',
                'Tu Lista Ha Sido Eliminada.',
                'success'
              )
            } else if (
               result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Tu Lista Esta Intacta :)',
                'error'
              )
            }
          })
    }
    render() { 
        const {cartSubtotal, cartTax, cartTotal, comprarCart} = this.props.value;
        return (  
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto
                                col-sm-8 text-capitalize text-right">
                            <Link to="/Cart">
                                <button className="btn btn-outline-danger text-uppercase
                                    mb-3 px-5 mr-2" 
                                        type="button"
                                     onClick={() => this.aviso()}>
                                        Eliminar Articulos
                                </button>
                            </Link>
                            <button className="btn btn-outline-dark text-uppercase
                                    mb-3 px-5" 
                                        type="button"
                                     onClick={() => comprarCart()}>
                                        Comprar
                            </button>
                            <h5>
                                <span className="text-title">
                                    subtotal : 
                                </span>
                                <strong>
                                    $ {cartSubtotal}
                                </strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    IVA : 
                                </span>
                                <strong>
                                    $ {cartTax}
                                </strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    total : 
                                </span>
                                <strong>
                                    $ {cartTotal}
                                </strong>
                            </h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 


