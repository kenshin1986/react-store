import React, { Component } from 'react';
import SlideBase from './SlideBase';



export default class SlideTop extends Component {
    state={
    slideTop: [
                { 
                    id: 1, 
                    ruta1: "ruta de una foto desde db.jpg",
                    ruta2: "ruta de una foto desde db.jpg",
                    ruta3: "ruta de una foto desde db.jpg",
                    ruta4: "ruta de una foto desde db.jpg",
                    ruta5: "ruta de una foto desde db.jpg", 
                    titulo: "aqui va Titulo  del slide Top", 
                    parrafo: "texto texto",
                    link: "#top" 
                }
    ]
      
}
    
    render() {
        return (
            <div className="slide-Top mt-1">
                {this.state.slideTop.map(f => (
                  
                  <SlideBase
                        id="top"
                        key={f.id}
                        ruta1={f.ruta1}
                        ruta2={f.ruta2}
                        ruta3={f.ruta3}
                        ruta4={f.ruta3}
                        ruta5={f.ruta3}
                        // titulo={f.titulo}
                        // parrafo={f.parrafo}
                        link={f.link}
                    />
                
                ))} 
            </div>
            
        )
    }
}

 