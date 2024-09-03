// import React from 'react'
import Hero from "../components/HomePageRow/Hero";
import image from "../images/heoImg.jpeg";

const HomePage = () => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 grid-cols-1 md:gap-20 ">
      <Hero/>
      <img className="rounded-lg order-first sm:order-last" src={image} alt="Hero" />
    </div>
  );
};

export default HomePage;
