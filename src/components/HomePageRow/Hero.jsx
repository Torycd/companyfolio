// import React from 'react'

import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="flex items-center text-center md:text-left">
      <div className="space-y-4">
        <h2 className="text-blue-800 uppercase font-medium">
          about Pen & Pixel
        </h2>
        <div className="text-gray-800 font-bold text-3xl  md:text-6xl space-y-2">
          <h2>We are a modern</h2>
          <h2>design agency.</h2>
        </div>
        <p className="font-medium text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button>See Portfolio</Button>
      </div>
    </div>
  );
};

export default Hero;
