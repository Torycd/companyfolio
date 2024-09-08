// import React from 'react'
import intro from "../../images/Intro.jpg";

const Intro = () => {
  return (
    <div className="mt-40">
      <h2 className="text-6xl my-20 font-bold">Blog Post</h2>
      <div className="flex flex-row bg-gray-100 rounded-lg">
        <img className="max-h-96 rounded-bl-lg" src={intro} alt="vlog" />
        <div className="flex flex-col items-center p-8 md:items-start">
          <h2 className="uppercase text-blue-800 mb-5 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-blue-700 after:w-8">
            Design Tips
          </h2>
          <p className="uppercase font-bold text-gray-600 italic">September 8, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
