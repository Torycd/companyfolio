import { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../Button/Button";

const NavigationMenu = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navClass =
    "transition duration-300 font-medium mr-2 lg:mr-5 border-b-2 border-white   hover:border-gray-700";
  return (
    <div>
      <div className="">
        <div className="flex justify-between">
          <div className="font-bold lg:text-xl flex items-center gap-1">
            <div className="bg-blue-800 text-white p-1 rounded-md">Pp</div>
            <h2 className="">Pen & Pixel</h2>
          </div>
          <div className="hidden lg:flex gap-1 lg:gap-4 text-gray-700">
            <ul className="flex items-center gap-1 lg:gap-2">
              <li className={navClass}>About</li>
              <li className={navClass}>Blog</li>
              <li className={navClass}>Pricing</li>
              <li className={navClass}>Contact Us</li>
              <li className={`ml-1 lg:ml-16 ${navClass}`}>Login</li>
            </ul>
            <Button>Sign Up</Button>
          </div>
          {/* mobile menu */}

          <div
            className=" text-blue-800 flex justify-center z-50 items-center lg:hidden relative"
            onClick={handleNav}
          >
            {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
          </div>
        </div>
        <div className={nav ? "lg:hidden fixed right-0 mt-5 px-2  w-full" : ""}>
          <div
            className={
              nav
                ? "fixed right-0 w-[100%]  rounded-md z-50 text-gray-700 ease-in duration-500"
                : "fixed right-[-200%] rounded-md ease-in duration-800"
            }
          >
            <div className="border bg-white z-50 border-gray-300 p-10 mx-2 flex flex-col text-xl font-medium items-center gap-4">
              <ul className="text-center space-y-5">
                <li>About</li>
                <li>Blog</li>
                <li>Pricing</li>
                <li>Contact Us</li>
                <li>Login</li>
              </ul>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
