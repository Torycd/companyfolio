import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../Button/Button";

const NavigationMenu = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navClass =
    "transition duration-300 font-medium mr-2 lg:mr-5 border-b-2 border-white hover:text-blue-800   hover:border-blue-800";
  const activeClass =
    "transition duration-300 font-medium mr-2 lg:mr-5 border-b-2 text-blue-800 border-blue-800";
  return (
    <div>
      <div className="">
        <div className="flex justify-between">
          <div className="font-bold lg:text-xl flex items-center gap-1 group">
            <div className="bg-blue-800 text-white p-1 rounded-md">Pp</div>
            <h2 className="group-hover:text-blue-800">Pen & Pixel</h2>
          </div>
          <div className="hidden lg:flex gap-1 lg:gap-4 text-gray-700">
            <ul className="flex items-center gap-1 lg:gap-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : navClass
                }
                to="/"
                end
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : navClass
                }
                to="/About"
                end
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to="/Blog"
                className={({ isActive }) =>
                  isActive ? activeClass : navClass
                }
              >
                <li>Blog</li>
              </NavLink>
              <NavLink
                to="/Pricing"
                className={({ isActive }) =>
                  isActive ? activeClass : navClass
                }
              >
                <li>Pricing</li>
              </NavLink>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? activeClass : navClass
                }
              >
                <li>Contact Us</li>
              </NavLink>

              <Link to="/Login" className={`ml-1 lg:ml-16 ${navClass}`}>
                Login
              </Link>
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
              <ul className="text-center space-y-10">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/About">
                  <li>About</li>
                </Link>
                <Link to="/Blog">
                  <li>Blog</li>
                </Link>
                <Link to="/Pricing">
                  <li>Pricing</li>
                </Link>
                <Link to="/Contact">
                  <li>Contact Us</li>
                </Link>
                <Link to="/login">
                  <li>Login</li>
                </Link>
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
