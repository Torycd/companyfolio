import React from "react";
import { FaHeadset, FaShieldVirus, FaPeopleArrows } from "react-icons/fa";

const Services = () => {
  const SERVICE = [
    {
      title: "24/7 Support",
      info: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
      icon: FaHeadset,
    },
    {
      title: "Strong Teams",
      info: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
      icon: FaShieldVirus,
    },
    {
      title: "Customer Satisfaction",
      info: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
      icon: FaPeopleArrows,
    },
  ];

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
        {/* value */}
        {SERVICE.map((stat) => (
          <div
            className="space-y-4 hover:scale-105 transition-all ease-in-out duration-500"
            key={stat.title}
          >
            <div className="flex justify-center">
              <div className="rounded-full bg-gray-200 p-5 text-blue-800">
                {React.createElement(stat.icon, { size: 25 })}
              </div>
            </div>
            <h2 className="font-bold text-2xl text-gray-700">{stat.title}</h2>
            <p className="text-wrap text-xl text-gray-700 font-medium">
              {stat.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;