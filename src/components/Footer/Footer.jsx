// import React from 'react'

import FooterButtom from "./FooterButtom";
import FooterGrid from "./FooterGrid";

const Footer = () => {
 
  return (
    <div className="mt-20 bg-gray-200 lg:px-64 md:px-24 sm:px-10 px-4 py-20 text-gray-500">
      <FooterGrid/>
      <hr className="border-gray-300 my-10"/>
      <FooterButtom/>
    </div>
  );
};

export default Footer;
