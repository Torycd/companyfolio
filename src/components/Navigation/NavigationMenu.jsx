// import React from "react";
import Button from "../Button/Button";

const NavigationMenu = () => {
  const navClass =
    "transition duration-300 font-medium mr-5 border-b-2 border-white   hover:border-gray-700";
  return (
    <div className="sm:mb-10">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-4xl">Pen & Pixel</h2>
        </div>
        <div className="flex gap-4 text-gray-700">
          <ul className="flex items-center gap-2 ">
            <li className={navClass}>About</li>
            <li className={navClass}>Blog</li>
            <li className={navClass}>Pricing</li>
            <li className={navClass}>Contact Us</li>
            <li className={`ml-16 ${navClass}`}>Login</li>
          </ul>
          <Button>sIgn up</Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
