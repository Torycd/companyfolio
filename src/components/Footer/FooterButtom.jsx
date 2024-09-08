// import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterButtom = () => {
  return (
    <div className="flex flex-col items-center gap-5 md:gap-0 md:flex-row justify-between border-t">
      <div className="font-bold text-xl flex items-center gap-1">
        <div className="bg-blue-800 text-white p-1 rounded-md">Pp</div>
        <h2 className="">Pen & Pixel Inc.</h2>
      </div>
      <div>
        <p>© 2024 Pen & Pixel Inc. All Rights Reserved.</p>
      </div>
      <div className="flex justify-between  gap-5">
        <a href="/">
          <FaFacebook className="text-black/80 hover:text-black/60" size={30} />
        </a>
        <a href="/">
          <FaTwitter className="text-black/80 hover:text-black/60" size={30} />
        </a>
        <a href="/">
          <FaYoutube className="text-black/80 hover:text-black/60" size={30} />
        </a>
      </div>
    </div>
  );
};

export default FooterButtom;
