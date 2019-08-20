import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import jwt from 'jwt-simple'
//import {BrowserRouter, Switch, Route, Redirect, withRouter} from 'react-router-dom';
//import Auth from './Auth/Auth'



// creamos el context
const ProductContext= React.createContext();
// contiene 2 metodos
// provider se usara para pasar los datos, estados, funciones, etc
// consumer se aplica en la clase donde se van a usar esos datos
// se debe de importar el ProductContext en la clase a usar el provider

export default class ProductProvider extends Component {
    state = { 
        urlG:'http://localhost:3001/',
        products: [],
        detailProduct:[], 
        cart: [],
        datosUser: [],
        modalOpen: false, 
        modalProduct: [],
        modalBusquedaOpen: true,
        modalLoginOpen: false,
        modalRegistroOpen: false,
        userLoginState: false,
        cartSubTotal:0,
        cartTax: 0,
        cartTotal: 0,
        cantidad:0,
        termino: '',
        btnLogName: 'Ingresar',
        pintarBtn:'',
        token: [],
       

     };
     componentDidMount(){
        const tokenLocal = JSON.parse(localStorage.getItem('token'))
        if( tokenLocal.length===0){
            this.sinUsuarioLogeado()
        }else{
            this.sinUsuarioLogeado() ///// pendiente por logica de estados
            this.conUsuarioLogeado(tokenLocal) 
        }
        
  
    }
        
     componentDidUpdate(){
            this.estadosLocales()
        
    }

//////////////////////////////////////////////////////////////////////////
    sinUsuarioLogeado = () =>{
        
        if(this.state.products.length===0){
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
        const contador = parseInt(localStorage.getItem('contador'));
        if(carrito){
          
            if(impuesto && carritoTotal){
                this.setState(() =>{
                    return {
                        cart: JSON.parse(carrito),
                        cartTax: impuesto,
                        cartTotal: carritoTotal,
                        cartSubtotal: carritoTotal - impuesto,
                        cantidad: contador
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
    
    conUsuarioLogeado = (tokenLocal) =>{
        this.setState(()=>{
            return{userLoginState: true,
                    token: tokenLocal
            }
            },
            () =>{
             this.cerrarModalLogin();
             this.btnLoginName()
             } 
        )
    }

//////////////////////////////////////////////////////////////////
    estadosLocales= () =>{
        localStorage.setItem(
            'products',
            JSON.stringify(this.state.products)
        )
        localStorage.setItem(
            'contador',
            JSON.stringify(this.state.cantidad)
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
        this.asignarTokenLocal()
    }


    /**    */

    asignarTokenLocal = () =>{
        localStorage.setItem(
            'token',
         JSON.stringify(this.state.token)
        )
    }




///////////////////////////////////////////////////////////////////
     setProducts = async (categoria) => {
        const productos = localStorage.getItem('products');
        const contador = parseInt(localStorage.getItem('contador'));
        let url=this.state.urlG;
        if(productos !== undefined && productos !== null && contador !== undefined 
                    && contador !== null && contador>0){
          
            if(categoria === undefined || categoria === null){
                const json = JSON.parse(productos)
                this.setState({
                    products: json
                })
            }else{
                
                url= url+`articulos`;
                // url= 'http://localhost:3001/articulos/'+categoria;
            }
            
        }else{
            if(categoria === undefined || categoria === null){
               
                this.setState(()=>{
                    return {cantidad:0}   
                })
               
                url= url+`articulos`;
                
                const json = await axios.get(url)
                .catch(err=>{console.log(err)})        
                const array = json.data.articulos
                if(array.length === 0) return null;
                let tempProducts =[];
                array.forEach(item =>{
                    const singleItem = {...item};
                    tempProducts = [...tempProducts, singleItem];
                })
                this.setState( () => {
                    return {products:tempProducts}
                });
            
            }else{
                alert('filtrar '+categoria)
                url= url+`articulos`;
                // url= 'http://localhost:3001/articulos/'+categoria;
                const json = await axios.get(url)
                .catch(err=>{console.log(err)})        
                const array = json.data.articulos
                if(array.length === 0) return null;
                let tempProducts =[];
                array.forEach(item =>{
                    const singleItem = {...item};
                    tempProducts = [...tempProducts, singleItem];
                })
                this.setState( () => {
                    return {products:tempProducts}
                });
            }
        } 
           
       
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
    
   ///////////////////////////////////////
     incrementCartCounter =() =>{
       let suma = this.state.cantidad +1
        this.setState(() =>{
            return {
                cantidad: suma
            }
        })
     }
    ///////////////////////////////////////
    restarCantidadCart =() =>{
        
        const resta = this.state.cantidad -1
      
        if(resta === 0){
            localStorage.removeItem('contador');
            this.setState(() =>{
                return {
                    cantidad: 0
                }
            })

        }else{
            this.setState(() =>{
                return {
                    cantidad: resta
                }
            })
        }
         
      }
     resetCartCounter =() =>{
        this.setState(() =>{
             return {
                 cantidad: 0
             }
         })
      }
    //////////////////////////////////////
      datosBusqueda =(termino)=>{
       if(termino !== undefined && termino !== null ){
            this.setState({
                termino
            }, () =>{
                //this.realizarBusqueda();
                this.setProducts(termino);
            })
       } 
     }
    /////////////////////////////////////
      login = async (datos) =>{
            if(datos !== undefined && datos !== null ){
                // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
                let url=this.state.urlG;
                 url= url+`usuario/login`;
                const json = await axios.post(url,{datos})
                .catch(err=>{console.log(err)}) 
                const res=json.data.res
                console.log(res)
                if(res){
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: res,
                        footer: 'Tienes Problemas para Ingresar?'
                      })
                    return null;
                }
                if(json.data.token){
                    this.asignarUsuario(json.data.token)
                   
                }else{
                    alert('no login')
                }
             }
     }

    

      ////////////////////////////////////
     registrarUsuario = async (datos) =>{
        if(datos !== undefined && datos !== null ){
            let url=this.state.urlG;
             url= url+`usuario/singup`;
            const json = await axios.post(url,{datos})
            .catch(err=>{console.log(err)}) 
            const res=json.data.res
            console.log(res)
            
            if(res){
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: res,
                    footer: 'Tienes Problemas para Ingresar?'
                  })
                return null;
            }
            if(json.data.token){
                
                Swal.fire(
                    'Registro Exitoso!',
                    'rr',
                    'success'
                )
                this.asignarUsuario(json.data.token)
               
            }else{
                alert('no login')
            }
        }
     }
     /////////////////////////////////////////
     asignarUsuario = (token) =>{
        
        const array = token.split(" ")[0]
                 const payload = jwt.decode(array,"SOLTEC-tecnologiaydesarrollo$")
                
                 if(payload.sub !== undefined || payload.sub !== null){
                    ///gaurdar el token

                   // const nombre = payload.sub[0].nombre
                    this.setState(()=>{
                        return{userLoginState: true,
                                token: payload.sub[0]}
                        //, userLoginState: array
                            },
                        () =>{
                                  
                         this.cerrarModalLogin()
                         this.btnLoginName()
                         this.asignarTokenLocal()
                         } 
                    )
                    let nombre = this.state.token.nombre
                    
                    Swal.fire(
                        'Bienvenido!',
                        nombre,
                        'success'
                    )
               }else{
                    // const tokenLocal = JSON.parse(localStorage.getItem('token'))
                    // let nombre = tokenLocal.nombre
                    // Swal.fire(
                    //     'Bienvenido!',
                    //      nombre,
                    //     'success'
                    // )
               }
     }


      ////////////////////////////////////////
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
                    product]};
         },
         () =>{
             this.addTotals();
           }
         );
    };
    /////////////////////////////////////
    abrirModalBusqueda = () =>{
     this.setState(()=>{
            return{modalBusquedaOpen: true}
     })
    }
   
   ///////////////////////////////////
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
    //////////////////////////////////////
    abrirModalLogin = () =>{
        if(this.state.btnLogName !== 'Salir'){
            this.setState(()=>{
                return{modalLoginOpen: true}
             })
        }else{
            this.setState(()=>{
                return{userLoginState: false}
                //, userLoginState: array
            },
            () =>{
                    this.btnLoginName()
              })
        }
     }
    cerrarModalLogin = () =>{
        this.setState(()=>{
               return{modalLoginOpen: false}
            }
            )
        }
   
    ///////////////////////////////////
    abrirModalRegistro = () =>{
       this.setState(()=>{
            return{modalRegistroOpen: true}
         })
    }
    cerrarModalRegistro = () =>{
        this.setState(()=>{
             return{modalRegistroOpen: false}
          })
     }
   
    ///////////////////////////////////
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
            this.restarCantidadCart()
            this.setProducts();
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
        this.restarCantidadCart()
        this.setState(() =>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            };
        },
        () =>{
            this.addTotals()
            this.setProducts();
            }
        )
    }
    clearCart = () =>{
        this.setState(() =>{
            return {cart:[], cantidad:0}
        },() =>{
            localStorage.removeItem('products');
            localStorage.removeItem('cart');
            this.setProducts();
            this.addTotals();
             }
        )
    }

    comprarCart = async() =>{
        const carrito = localStorage.getItem('cart');
        const cart= JSON.parse(carrito)
        const res = await axios.post('http://localhost:3001/carrito',cart)
        
        if(res.data.res){
            
            /**
             * valida que el total a pagar en el cliente sea igual al total calculado desde el server
             */
           if(res.data.total){
               if(this.state.cartTotal === res.data.total){

                //aca va la redireccion, si el usuario no esta registrado abre formulario,
                //muestra al usuario el resumen del pedido y confirma el medio de pago
                    this.setState(() =>{
                    return {cart:[]}
                    },() =>{
                        this.setProducts();
                        this.addTotals();
                    })
                }else{
                    console.log("Error al validar los totales");
               }
           }
        }    
        
    }
    
    ///////////////////////////////////////////////
    btnLoginName= () =>{
        if(this.state.userLoginState){
                this.setState(() =>{
                    return {btnLogName:'Salir',
                            pintarBtn: 'd-none'}
            })
       }else{
            this.setState(() =>{
                    return {btnLogName:'Ingresar',
                            pintarBtn: ''}
            },()=>{
                // let tokenLocal = JSON.parse(localStorage.getItem('token'))
                // console.log(localStorage.getItem('token'))
                // console.log(tokenLocal)
                // let nombre = tokenLocal.nombre
                // Swal.fire('Ha Cerrado Sesion \n'+ nombre)
                Swal.fire('Ha Cerrado Sesion ')
                this.setState(()=>{
                    return{ token:[]}
                 })
            }
            )
       }
       
        
    }

    //////////////////////////////////////////////
    
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
                abrirBusqueda: this.abrirModalBusqueda,
                abrirLogin: this.abrirModalLogin,
                cerrarLogin: this.cerrarModalLogin,
                abrirRegistro: this.abrirModalRegistro,
                cerrarRegistro: this.cerrarModalRegistro,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                comprarCart: this.comprarCart,
                suma: this.incrementCartCounter,
                reset: this.resetCartCounter,
                busqueda: this.datosBusqueda,
                login: this.login,
                registrar: this.registrarUsuario,
                stateUser: this.userLoginState,
                cambiarNombreBtn: this.btnLoginName,
                Name: this.btnLogName,
                pintar: this.state.pintarBtn,
            }}>
                {this.props.children}
            </ProductContext.Provider>
          );
    }
}
 
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};