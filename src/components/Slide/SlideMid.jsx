import React, { Component } from 'react';

import SlideMidBase from './SlideMidBase';


export default class SlideMid extends Component {
    state={
        slideMid1: [
                    { 
                        id: 1, 
                        ruta1: "ruta de una foto desde db.jpg",
                        ruta2: "ruta de una foto desde db.jpg",
                        ruta3: "ruta de una foto desde db.jpg",
                        titulo: "aqui va la 1", 
                        parrafo: "texto 1",
                        link: "#top" 
                    }
           
          ],
          slideMid2: [
            { 
                id: 1, 
                ruta1: "ruta de una foto desde db.jpg",
                ruta2: "ruta de una foto desde db.jpg",
                ruta3: "ruta de una foto desde db.jpg",
                titulo: "aqui va la 2", 
                parrafo: "texto 2",
                link: "#top" 
            }
   
        ]
          
    }

    render() {
        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-6 mt-3" >

                    {this.state.slideMid1.map(f => (
                   
                        <SlideMidBase
                            key={f.id}
                            id="mid2"
                            ruta1={f.ruta1}
                            ruta2={f.ruta2}
                            ruta3={f.ruta3}
                            titulo={f.titulo}
                            parrafo={f.parrafo}
                            link={f.link}
                        />
                    
                    ))}

                        
                         
                        
                    </div>
                    <div className="col-sm-6 mt-3" >
                        {this.state.slideMid2.map(f => (
                            
                            <SlideMidBase
                                key={f.id}
                                id="mid1"
                                ruta1={f.ruta1}
                                ruta2={f.ruta2}
                                ruta3={f.ruta3}
                                titulo={f.titulo}
                                parrafo={f.parrafo}
                                link={f.link}
                            />
                        
                        ))}
                    </div>
                </div>
            </div>

        )
    }
}

