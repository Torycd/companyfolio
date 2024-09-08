// import React from 'react'
import intro from "../../images/Intro.jpg";

const Intro = () => {
  return (
    <div className="mt-40">
      <h2 className="text-6xl my-20 font-bold">Blog Post</h2>
      <div className="group flex flex-row  bg-gray-100 rounded-lg">
        <img className="max-h-96 rounded-bl-lg" src={intro} alt="vlog" />
        <div className="flex flex-col space-y-4 items-center p-8 md:items-start">
          <h2 className="uppercase text-blue-800 mb-2 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-blue-700 after:w-8">
            Design Tips
          </h2>
          <p className="uppercase font-bold text-gray-600 opacity-60 italic">
            September 08, 2024
          </p>
          <h2 className="font-bold text-2xl group-hover:text-blue-700">Best Designs across space </h2>
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
