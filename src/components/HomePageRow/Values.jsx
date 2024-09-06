// import React from 'react'

const Values = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="space-y-4 mb-24">
        <h2 className="text-blue-800 uppercase font-medium">Our Values</h2>
        <div className="text-gray-800 font-bold text-3xl  md:text-6xl space-y-2">
          <h2 className="text-wrap">We follow these.</h2>
        </div>
        <p className="font-medium md:text-xl text-gray-500 text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br></br>
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid md:grid-cols-3 px-10">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="rounded-full bg-gray-200 p-5">emj</div>
          </div>
          <h2 className="font-bold text-2xl text-gray-700" >24/7 Support</h2>
          <p className="text-wrap text-xl text-gray-700 font-medium">
            Lorem ipsum donor amet siti ceali placeholder text alipiscing elit
            sed do eiusmod temport
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
