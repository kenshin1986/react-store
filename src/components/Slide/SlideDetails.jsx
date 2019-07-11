import React from 'react';



const SlideDetails =(props) =>(
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
            <img src={props.img} alt="Los Angeles" width="750" height="480"></img>
            
        </div>
        <div className="carousel-item">
            <img src={props.img} alt="Chicago" width="750" height="480"></img>
             
        </div>
        <div className="carousel-item">
            <img src={props.img} alt="New York" width="750" height="480"></img>
             
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
    
export default SlideDetails;