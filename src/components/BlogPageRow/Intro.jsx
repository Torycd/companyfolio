// import React from 'react'
import intro from "../../images/Intro.jpg";

const Intro = () => {
  return (
    <div className="mt-28 md:mt-40">
      <h2 className="text-4xl md:text-6xl my-20 font-bold">Blog Post</h2>
      <div className="md:group flex flex-col  md:flex-row bg-gray-100 rounded-lg">
        <img className="max-h-96 md:w-[70%] rounded-t-lg md:rounded-t-none md:rounded-bl-lg" src={intro} alt="vlog" />
        <div className="flex md:w-[30%] flex-col space-y-4 p-8">
          <h2 className="uppercase text-blue-800 mb-2 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-blue-700 after:w-8">
            Design Tips
          </h2>
          <p className="uppercase font-bold text-gray-600 opacity-60 italic">
            September 08, 2024
          </p>
          <h2 className="font-bold text-2xl text-blue-700 md:text-black md:group-hover:text-blue-700  transition-all duration-500">Best Designs across space </h2>
          <p className="font-medium opacity-60" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
