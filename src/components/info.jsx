import React from 'react';


const Info = (props) => (
   <div className="px-1 py-3 ">
      <div className="row py-1 px-0 bg-dark">
       <div className="col-6 col-md-4 mb-0 ">  {/*primera columna */}  
           <ul className="navbar-nav mb-0 px-2 d-flex flex-md-column">
               <h5 className="text-white ">Acerca de Planeta<span><strong>Store</strong></span></h5>
               <li className="nav-item" ><a href="#top">Mision</a></li>
               <li className="nav-item" ><a href="#top">Vision</a></li>
               <li className="nav-item" ><a href="#top">Lema</a></li>
            </ul>

         </div>
         <div className="col-6  ml-0 mr-0 mb-0 col-md-4 mb-md-0  ">  {/*segunda columna */}
            <ul className="navbar-nav mb-0 d-flex flex-md-column">
               <h5 className=" text-white mb-4 pb-2 mb-sm-2 sm-pb-0">Soporte</h5>
               <li className="nav-item" ><a href="#top">¿Necesitas ayuda?</a></li>
               <li className="nav-item" ><a href="#top">contactanos</a></li>
               <li className="nav-item" ><a href="#top">Servicio al cliente</a></li>
            </ul>
         </div>
         <div className="col-12 ml-0 mr-0 mt-3 mt-md-0 mb-sm-0 col-md-4 ">  {/*tercera columna */}
            <ul className="navbar-nav mt-0 mb-0 mb-lg-0 d-flex flex-lg-column ">
               <h5 className="text-white mt-md-1 mr-md-4">Mas Inspiracion</h5>
               <li className="nav-item mr-md-2" >
                  <a href="#top">Siguenos en Facebook
                     <span className="ml-2"><i className="fab fa-facebook-square" /></span>
                  </a>
               </li>
               <li className="nav-item mr-md-2 " >
                  <a href="#top">Siguenos en Instagram
                              <span className="ml-2"><i className="fab fa-instagram" /></span>
                  </a>
               </li>
               <li className="nav-item mr-md-2" >
                  <a href="#top">Siguenos en twitter
                              <span className="ml-2"><i className="fab fa-twitter-square"></i></span>
                  </a>
               </li>

            </ul>
         </div>
       </div>
      </div>

)


export default Info;