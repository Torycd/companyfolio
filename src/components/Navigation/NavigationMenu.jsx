import React from "react";

const NavigationMenu = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-3xl">Treact</h2>
        </div>
        <div className="flex gap-4">
          <ul className="flex space-x-3 items-center gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
          <button>Login</button>
          <button>sIgnup</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
