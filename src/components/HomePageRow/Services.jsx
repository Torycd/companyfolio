import React from "react";
import { FaArrowRight, FaPeopleArrows, FaPrescription } from "react-icons/fa";

const Services = () => {

  const SERVICE = [
    {
      title: "200+ Designers",
      info: "Lorem ipsum donor amet siti ceali placeholder text",
      icon: FaPeopleArrows,
    },
    {
      title: "Personal Designers",
      info: "Lorem ipsum donor amet siti ceali placeholder text",
      icon: FaPrescription,
    },
    {
      title: "UI/UX Designs",
      info: "Lorem ipsum donor amet siti ceali placeholder text",
      icon: FaPeopleArrows,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex text-gray-800 mb-24 items-center md:text-left z-10 text-center text-nowrap font-bold leading-snug text-3xl xl:text-5xl">
        <h2>Amazing</h2>
        <h2 className="ml-5 bg-blue-800 p-2 mt-4 text-white transform -skew-x-12 inline-block z-100">
          Services.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3 px-32">
        {/* value */}
        {SERVICE.map((stat) => (
          <div
            className="space-y-4 hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
            key={stat.title}
          >
            <div className="flex justify-center">
              <div className="rounded-full bg-gray-200 p-5 text-blue-800">
                {React.createElement(stat.icon, { size: 25 })}
              </div>
            </div>
            <h2 className="font-bold text-2xl text-gray-700">{stat.title}</h2>
            <p className="text-wrap text-gray-700 font-medium">
              {stat.info}
            </p>
            <div className="flex text-center text-blue-800  hover:text-blue-900 justify-center items-center gap-3"><p className="font-semibold text-nowrap">Learn More</p><FaArrowRight/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
