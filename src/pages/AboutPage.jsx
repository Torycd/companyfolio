// import React from 'react'
import Animation from "../components/Helpers/Animation"

import Hero from "../components/AboutPageRow/Hero";
import Team from "../components/AboutPageRow/Team";
import Values from "../components/AboutPageRow/Values";
import Vision from "../components/AboutPageRow/Vision";


const AboutPage = () => {
 
  return (
    <Animation>
      <Hero/>
      <Vision />
      <Values/>
      <Team/>
    </Animation>
  );
};

export default AboutPage;
