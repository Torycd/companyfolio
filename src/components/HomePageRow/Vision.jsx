// import React from 'react'
import image from "../../images/visionImage.jpeg";
import Detail from "../Card/Detail";

const btn = "See Portfolio";
const title = "about Pen & Pixel";
const heading = "We are a modern design agency";

const Content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Vision = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-20 ">
      <img
        className="rounded-lg mb-10"
        src={image}
        alt="Hero"
      />
      <Detail btn={btn} heading={heading} title={title} Content={Content} />
    </div>
  );
};

export default Vision;
