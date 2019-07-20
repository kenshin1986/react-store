import React, { Component } from 'react'
import axios from 'axios'

import {storeProducts, detailProduct} from '../data';



const ProductContext= React.createContext();
//provider
//consumer

export default class ProductProvider extends Component {
    state = { 
        products: [],
        detailProduct:detailProduct, //local storage
        cart: [],
        modalOpen: false, 
        modalProduct: detailProduct,
        cartSubTotal:0,
        cartTax: 0,
        cartTotal: 0

     };
     componentDidMount(){
         this.setProducts();
     }
     setProducts = async () => {
        
        const json = await axios.get(`http://localhost/articulos`)
        .catch(err=>{console.log(err)})        
        const array = json.data.articulos
        
        let tempProducts =[];
        array.forEach(item =>{
             const singleItem = {...item};
             tempProducts = [...tempProducts, singleItem];
         })
         this.setState( () => {
             return {products:tempProducts}
         });
     };
     getItem = id =>{
         const product = this.state.products.find(item => item._id === id);
         return product;
     }
     handleDetail = (id) =>{
         const product = this.getItem(id);
         this.setState(()=>{
             return {detailProduct:product}   
         })
     }
     addToCart = (id) =>{
         let tempProducts =[...this.state.products];
         const index = tempProducts.indexOf(this.getItem(id));
         const product = tempProducts[index];
         product.inCart = true;
         product.count = 1;
         const precio = product.precio;
         product.total = precio;
         this.setState(()=>{
            return {products: tempProducts,
                    cart:[...this.state.cart,
                    product] };
         },
         () =>{
             this.addTotals();
         }
         );
         
    };
    openModal = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
           return {modalProduct: product, modalOpen: true}
        })
    }
    closeModal = id =>{
        this.setState(()=>{
            return {modalOpen: false}
        })
    }
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item._id ===id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.cantidad = product.cantidad +1 ;
        product.total = product.cantidad * product.precio;
        this.setState(() =>{return{cart:[...tempCart]}
        },
        () =>{this.addTotals()})
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item._id ===id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.cantidad = product.cantidad - 1;
        if(product.cantidad === 0){
            this.removeItem(id)
        }else{
            product.total = product.cantidad * product.precio;
            this.setState(
                () =>{return{cart:[...tempCart]};
                },
                () =>{
                    this.addTotals();
                }
            );
        }
    }
    removeItem = (id) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item =>item._id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart =false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(() =>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            };
        },
        () =>{
            this.addTotals();
        }
        )
    }
    clearCart = (id) =>{
        this.setState(() =>{
            return {cart:[]}
        },() =>{
            this.setProducts();
            this.addTotals();
        }
        )
    }
    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item =>(subTotal += item.total));
        const tempTax = subTotal * 0.19;
        const tax =parseFloat(tempTax.toFixed(2));
        const total = subTotal ;
        subTotal=total-tax;
        this.setState(() =>{
            return {
                cartSubtotal:subTotal,
                cartTax:tax,
                cartTotal: total,
            }
        })
    }
    render() { 
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
                
            }}>
                {this.props.children}
            </ProductContext.Provider>
          );
    }
}
 
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};