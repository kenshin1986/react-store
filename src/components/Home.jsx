import React from 'react';
import SlideMid from './Slide/SlideMid';
import SlideBot from './Slide/SlideBot';
import Info from './info.jsx';
import SlideTop from './Slide/SlideTop';

function Home() {
  return (
    <React.Fragment>
      
      <SlideTop />
      <SlideMid />
      <SlideBot/>
      <Info/>
       
    </React.Fragment>
  );
}

export default Home;