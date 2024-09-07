// import React from 'react'
import Animation from "../components/Helpers/Animation"
import Hero from "../components/HomePageRow/Hero";
import Team from "../components/HomePageRow/Team";
import Values from "../components/HomePageRow/Values";
import Vision from "../components/HomePageRow/Vision";


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
