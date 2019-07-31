import React from 'react';
import SlideMid from './Slide/SlideMid';
import SlideBot from './Slide/SlideBot';

import SlideTop from './Slide/SlideTop';
//import Ofert from './Ofert'

function Home() {
  return (
    <React.Fragment>
         <SlideTop />
        <SlideMid />
        <SlideBot/>
        
      {/* <Ofert/> */}
      
      </React.Fragment>
    
  );
}

export default Home;