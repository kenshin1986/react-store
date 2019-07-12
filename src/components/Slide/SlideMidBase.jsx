import React from 'react';

import slideMid01 from '../../img/slideMid01.jpg';
import slideMid02 from '../../img/slideMid02.jpg';
import slideMid03 from '../../img/slideMid03.jpg';


const SlideMedio =(props) =>(
    <div id={props.id} className="carousel slide" data-ride="carousel">
    
    {/* <!-- Indicators --> */}
    <ul className="carousel-indicators">
    <li data-target={"#"+props.id} data-slide-to="0" className="active"></li>
    <li data-target={"#"+props.id} data-slide-to="1"></li>
    <li data-target={"#"+props.id} data-slide-to="2"></li>
   
    </ul>

    {/* <!-- The slideshow --> */}
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={slideMid01} alt="Los Angeles" width="750" height="480"></img>
            <div className="carousel-caption">
                <h3 className="d-none d-sm-block">{props.titulo}</h3>
                <p>{props.parrafo}</p>
                <a href={props.link} className="btn btn-outline-light">Ver mas..</a>
            </div> 
        </div>
        <div className="carousel-item">
            <img src={slideMid02} alt="Chicago" width="750" height="480"></img>
            <div className="carousel-caption">
                <h3 className="d-none d-sm-block">{props.titulo}</h3>
                <p>{props.parrafo}</p>
                <a href={props.link} className="btn btn-outline-light">Ver mas..</a>
            </div> 
        </div>
        <div className="carousel-item">
            <img src={slideMid03} alt="New York" width="750" height="480"></img>
            <div className="carousel-caption">
                <h3 className="d-none d-sm-block">{props.titulo}</h3>
                <p>{props.parrafo}</p>
                <a href={props.link} className="btn btn-outline-light">Ver mas..</a>
            </div> 
        </div>
       
    </div>

            {/* <!-- Left and right controls --> */}
        <a className="carousel-control-prev" href={"#"+props.id} data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href={"#"+props.id} data-slide="next">
            <span className="carousel-control-next-icon"></span>
        </a>
        </div>
)
    
export default SlideMedio;