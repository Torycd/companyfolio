// import React from 'react'

import Hero from "../components/HomePageRow/Hero";
import Values from "../components/HomePageRow/Values";
import Vision from "../components/HomePageRow/Vision";


const HomePage = () => {
 
  return (
    <div className="space-y-10">
      <Hero/>
      <Vision />
      <Values/>
    </div>
  );
};

export default HomePage;
