import React from 'react';

import slide01 from '../../img/slide01.jpg';
import slide02 from '../../img/slide02.jpg';
import slide03 from '../../img/slide03.jpg';
import slide04 from '../../img/slide04.jpg';
import slide05 from '../../img/slide05.jpg';

const SlideResp =(props) =>(
    <div id={props.id} className="carousel slide" data-ride="carousel">
    
    {/* <!-- Indicators --> */}
    <ul className="carousel-indicators">
    <li data-target={"#"+props.id} data-slide-to="0" className="active"></li>
    <li data-target={"#"+props.id} data-slide-to="1"></li>
    <li data-target={"#"+props.id} data-slide-to="2"></li>
    <li data-target={"#"+props.id} data-slide-to="3"></li>
    <li data-target={"#"+props.id} data-slide-to="4"></li>
    </ul>

    {/* <!-- The slideshow --> */}
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={slide01} alt="Los Angeles" width="1100" height="700"></img>
            <div className="carousel-caption">
                <h3 className="d-none d-sm-block">{props.titulo}</h3>
                <p>{props.parrafo}</p>
                <a href={props.link} className="btn btn-outline-light">Ver mas..</a>
            </div> 
        </div>
        <div className="carousel-item">
            <img src={slide02} alt="Chicago" width="1100" height="500"></img>
            <div className="carousel-caption">
                <h3 className="d-none d-sm-block">{props.titulo}</h3>
                <p>{props.parrafo}</p>
                <a href={props.link} className="btn btn-outline-light">Ver mas..</a>
            </div> 
        </div>
        <div className="carousel-item">
            <img src={slide03} alt="New York" width="1100" height="500"></img>
            <div className="carousel-caption">
                <h3 className="d-none d-sm-block">{props.titulo}</h3>
                <p>{props.parrafo}</p>
                <a href={props.link} className="btn btn-outline-light">Ver mas..</a>
            </div>  
        </div>
        <div className="carousel-item">
            <img src={slide04} alt="New York" width="1100" height="500"></img>
            <div className="carousel-caption">
                <h3 className="d-none d-sm-block">{props.titulo}</h3>
                <p>{props.parrafo}</p>
                <a href={props.link} className="btn btn-outline-light">Ver mas..</a>
            </div> 
        </div>
        <div className="carousel-item">
            <img src={slide05} alt="New York" width="1100" height="500"></img>
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
    
export default SlideResp;