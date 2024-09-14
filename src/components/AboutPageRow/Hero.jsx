// import React from 'react'
import image from "../../images/heoImg.jpeg";
import Detail from "../Card/Detail";

const Hero = () => {
  const btn = "Contact Us";
  const title = "Our Vision";
  const heading = "We aim to disrupt the design space";
  const Content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="grid md:grid-cols-2 h-screen grid-cols-1 md:gap-20 ">
      <Detail btn={btn} heading={heading} title={title} Content={Content} />
      <img
        className="rounded-lg mt-20 sm:mt-0 flex self-center order-first md:order-last"
        src={image}
        alt="Hero"
      />
    </div>
  );
};

export default Hero;
