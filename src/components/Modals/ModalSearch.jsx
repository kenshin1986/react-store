import React, { Component } from 'react'
import { ProductContext } from '../Context';

export default class ModalSearch extends Component {
    busquedaRef = React.createRef();
    render() {
        const { busqueda} = this.context;
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1"
                role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body bg-dark">
                            <form className="busqueda" action="/"
                                onSubmit={() => {
                                    busqueda(this.busquedaRef.current.value);
                                }}>
                                <div className="input-group">
                                    <input ref={this.busquedaRef} className="form-control"
                                        type="text"
                                        placeholder="¿Que Artículo buscas?" required />
                                    <div className="input-group-append">
                                        <input type="submit" value="Buscar"
                                            className="btn btn-dark text-white px-2 " />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ModalSearch.contextType = ProductContext;

