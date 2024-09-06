// import React from 'react'
import Animation from "../components/Helpers/Animation"
import Hero from "../components/HomePageRow/Hero";
import Values from "../components/HomePageRow/Values";
import Vision from "../components/HomePageRow/Vision";


const HomePage = () => {
 
  return (
    <Animation>
      <Hero/>
      <Vision />
      <Values/>
    </Animation>
  );
};

export default HomePage;
