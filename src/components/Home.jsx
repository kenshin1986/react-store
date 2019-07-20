import React from 'react';
import SlideMid from './Slide/SlideMid';
import SlideBot from './Slide/SlideBot';
import Info from './info.jsx';
import SlideTop from './Slide/SlideTop';
//import Ofert from './Ofert'

function Home() {
  return (
    <React.Fragment>
      
      <SlideTop />
      <SlideMid />
      <SlideBot/>
      <Info/>
      {/* <Ofert/> */}
      
       
    </React.Fragment>
  );
}

export default Home;