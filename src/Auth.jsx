import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    whithRouter,
    Switch 
} from 'react-router-dom'

const fakeAuth ={
    isAuthenticated: false,
    authenticate(bc){
        this.isAuthenticated =true
        setTimeout(cd, 100) //fake async
    },
    signout(cb){
        this.isAuthenticated =false
        setTimeout(cb, 100)
    }
}

const Home = () => <h3>Home</h3>
const Public = () => <h3>Contenido Publico</h3>
const Protected = () => <h3>Contenido Protegido</h3>

export default class Login extends Component {
    constructor(...props){
        super(...props)

        this.state = { 
            redirectRoute: false
        } 
        this.login =this.login.bind(this)
    } 
    login (){

    }
    
   
    render() { 
       if(isAuthenticated){

       }else{

       }
    }
}
const AuthSite = () =>(
    <Router>
        <div>
            <AuthButton />
        </div>
    </Router>
)
 
