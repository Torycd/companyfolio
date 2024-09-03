// import React from 'react'
import image from "../images/heoImg.jpeg";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2">
      <div></div>

      <img className="rounded-lg" src={image} alt="Hero" />
    </div>
  );
};

export default HomePage;
