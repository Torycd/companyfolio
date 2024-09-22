import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Menu = () => {
  const activeClass =
    " bg-blue-800 hover:bg-blue-700 text-white rounded-md px-6 py-3";
  const navClass = " p-2 ";
  return (
    <div className="min-h-screen my-24">
      <div className="flex justify-between">
        <div className="flex text-gray-800 items-center md:text-left z-10 text-center text-nowrap font-bold leading-snug text-3xl xl:text-5xl">
          <h2>Checkout our</h2>
          <h2 className="ml-5 bg-blue-800 p-2 mt-4 text-white transform -skew-x-12 inline-block z-100">
            Designs.
          </h2>
        </div>
        <div className="flex self-center items-center">
          <ul className="bg-gray-200 text-xl p-2 flex space-x-2 text-gray-700">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : navClass)}
              end
            >
              <li>Starter</li>
            </NavLink>
            <NavLink
              to="/main"
              className={({ isActive }) => (isActive ? activeClass : navClass)}
            >
              <li>Main</li>
            </NavLink>
            <NavLink
              to="/profesional"
              className={({ isActive }) => (isActive ? activeClass : navClass)}
            >
              <li>Proffesional</li>
            </NavLink>
          </ul>
        </div>
      </div>
      {/* content */}
      <Outlet />
    </div>
  );
};

export default Menu;
