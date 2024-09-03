// import React from 'react'
import Hero from "../components/HomePageRow/Hero";
import image from "../images/heoImg.jpeg";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 md:gap-20">
      <Hero/>
      <img className="rounded-lg" src={image} alt="Hero" />
    </div>
  );
};

export default HomePage;
