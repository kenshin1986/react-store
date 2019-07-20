import React, { Component } from 'react'
import './pushbar.css'
import './galeria.css'
import './estilos.css'
import servicios01Grande from '../img/servicios01Grande.jpg'
import servicios01 from '../img/servicios01.jpg'
import servicios02Grande from '../img/servicios02Grande.jpg'
import servicios02 from '../img/servicios02.jpg'
import servicios03Grande from '../img/servicios03Grande.jpg'
import servicios03 from '../img/servicios03.jpg'

class Ofert extends Component {
    state = {  }
    render() { 
        return ( 
            <div data-pushbar-id="pushbar-newsletter" className="pushbar from_bottom 
                pushbar-newsletter">
                <div className="container-fluid">
                    <button data-pushbar-close>
                        <i className="fas fa-times">
                        </i>
                    </button>
                    <div className="contenedor">
                        <section id="galeria">
                            <ul id="cajaGaleria">
                                <li>
                                    <div id="galeria00">    	
                                        <h1>Lorem Ipusm 1</h1>
                                        <img src={servicios01Grande} width="100%" alt="imagenG1"/>
                                        <p>Lorem ipsum color sit amet</p>
                                    </div>
                                </li>
                                <li>
                                <input type="radio" name="entrada" id="btn01"/>
                                <label for="btn01"><img src={servicios01} alt="imagenp1"/></label>
                                <div id="galeria01">
                                    <h1>Lorem Ipusm 1</h1>
                                    <img src={servicios01Grande} width="100%" alt="imageng1"/>
                                    <p>Lorem ipsum color sit amet</p>
                                </div>
                                </li>
                                <li>
                                    <input type="radio" name="entrada" id="btn02"/>
                                    <label for="btn02"><img src={servicios02} alt="imagenp2" /></label>
                                    <div id="galeria02">
                                        <h1>Lorem Ipusm 2</h1>
                                        <img src={servicios02Grande} width="100%" alt="imageng2"/>
                                        <p>Lorem ipsum color sit amet, lorem ipsum color sit amet, lorem ipsum color sit amet</p>
                                        </div>
                                    </li>
                                    <li>
                                        <input type="radio" name="entrada" id="btn03"/>
                                        <label for="btn03"><img src={servicios03} alt="imagenp3"/></label>
                                        <div id="galeria03">
                                            <h1>Lorem Ipusm 3</h1>
                                            <img src={servicios03Grande} width="100%" alt="imageng3"/>
                                            <p>Lorem ipsum color sit amet, lorem ipsum color sit amet</p>
                                        </div>
                                    </li>
                            </ul>
                        </section>
                    </div>

                </div>

		    </div>
         );
    }
}
 
export default Ofert;