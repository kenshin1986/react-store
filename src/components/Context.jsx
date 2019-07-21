import React, { Component } from 'react'
import axios from 'axios'

const ProductContext= React.createContext();
//provider
//consumer

export default class ProductProvider extends Component {
    state = { 
        products: [],
        detailProduct:[], 
        cart: [],
        modalOpen: false, 
        modalProduct: [],
        cartSubTotal:0,
        cartTax: 0,
        cartTotal: 0

     };
     componentDidMount(){
         if(this.state.products.length==0){
            this.setProducts();
        }
         const detalles = localStorage.getItem('detailProduct');
         const productos = localStorage.getItem('products');
         if(detalles){
             this.setState({
                detailProduct: JSON.parse(detalles)
             })
         } 
         if(productos){
            const json = JSON.parse(productos)
            this.setState({
                products: json
            })
        }   

        const carrito = localStorage.getItem('cart');
        const impuesto = parseInt(localStorage.getItem('cartTax')); 
        const carritoTotal = parseInt(localStorage.getItem('cartTotal'));
        if(carrito){
            if(impuesto && carritoTotal){
                this.setState(() =>{
                    return {
                        cart: JSON.parse(carrito),
                        cartTax: impuesto,
                        cartTotal: carritoTotal,
                        cartSubtotal: carritoTotal - impuesto
                    }
                })
            }else{
                this.setState(() =>{
                    return {
                        cart: [],
                        cartTax: 0,
                        cartTotal: 0,
                        cartSubtotal: 0
                    }
                })
            }
        }
  
    }

     componentDidUpdate(){

        localStorage.setItem(
            'products',
            JSON.stringify(this.state.products)
        )
        localStorage.setItem(
            'detailProduct',
            JSON.stringify(this.state.detailProduct)
        )
        localStorage.setItem(
            'cart',
            JSON.stringify(this.state.cart)
        )
        localStorage.setItem(
             'cartTax',
          
             JSON.stringify(this.state.cartTax)
        )
        localStorage.setItem(
            'cartTotal',
         
            JSON.stringify(this.state.cartTotal)
       )
    }


     setProducts = async () => {
        const json = await axios.get(`http://localhost:3001/articulos`)
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

    comprarCart = async() =>{
        const carrito = localStorage.getItem('cart');
        const cart= JSON.parse(carrito)
     
        const res = await axios.post(`http://localhost:3001/carrito`,cart)
        console.log(res)
        
        this.setState(() =>{
            return {cart}
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
                clearCart: this.clearCart,
                comprarCart: this.comprarCart
                
            }}>
                {this.props.children}
            </ProductContext.Provider>
          );
    }
}
 
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};