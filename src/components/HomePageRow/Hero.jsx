// import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import image from "../../images/heoImg.jpeg";
import Button from "../Button/Button";


const Hero = () => {
  // const btn = "Contact Us";
  // const title = "Our Vision";
  // const heading = "We aim to disrupt the design space";
  // const Content =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="grid md:grid-cols-2 h-screen grid-cols-1 md:gap-20 ">
      <div className="flex flex-col justify-center space-y-4">
        <div className="text-gray-800 items-center md:text-left z-10 text-center text-nowrap font-bold leading-snug text-xl xl:text-6xl">
          <h2>Beautiful & Cheap</h2>
          <h2 className="bg-blue-800 p-2 mt-4 text-white transform -skew-x-12 inline-block z-100">
            Simple & Classic.
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex">
          <Button>OrderNow</Button>
          <div className="flex font-medium text-gray-500 transition-all duration-500 hover:text-blue-400">
            <div className="items-center flex px-4">
              <FaRegPlayCircle  size={35} />
            </div>
            <p className="text-center justify-center flex flex-col" >Meet the Designers</p>
          </div>
        </div>
      </div>
      <img
        className="rounded-lg mt-20 sm:mt-0 flex self-center order-first md:order-last"
        src={image}
        alt="Hero"
      />
    </div>
  );
};

export default Hero;
