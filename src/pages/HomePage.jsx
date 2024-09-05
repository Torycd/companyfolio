// import React from 'react'
import Hero from "../components/HomePageRow/Hero";
import Vision from "../components/HomePageRow/Vision";
import image from "../images/heoImg.jpeg";

const HomePage = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 h-screen grid-cols-1 md:gap-20 ">
        <Hero />
        <img
          className="rounded-lg mt-32 md:mt-0 flex self-center order-first md:order-last"
          src={image}
          alt="Hero"
        />
      </div>
      <Vision/>
    </div>
  )
};

export default HomePage;
