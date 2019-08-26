import React from 'react';

export default function CartItem({item,value}){
    const {_id, nombre ,imagen, precio, total, cantidad} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center  ">
            <div className="col-10 mx-auto col-lg-2">
                <img      src={imagen} 
                        style={{width: "5rm", height: "5rem"}}
                    className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">
                    Producto :
                </span>
                    {nombre}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">
                    Precio :
                </span>
                    {precio}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" 
                                onClick={()=>decrement(_id)}>
                            -  
                        </span>
                        <span className="btn btn-black mx-1">
                            {cantidad}
                        </span>
                        <span className="btn btn-black mx-1" 
                                onClick={()=>increment(_id)}>
                            +  
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <div className="cart-icon"
                     onClick={()=> {removeItem(_id)} }>
                    <i className="fas fa-trash"/>
              </div>
                
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>
                    item total : $ {total}
                </strong>
            </div>
        </div>

    )

}