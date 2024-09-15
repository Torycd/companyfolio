import image from "../../images/main.jpg";
import Button from "../Button/Button";

const Info = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-20 ">
      <img className="rounded-[40px]  mt-20 sm:mt-0 " src={image} alt="Hero" />
      <div className="space-y-4 mt-5 md:mt-0 text-center md:text-start">
        <h2 className="text-blue-800 uppercase font-medium">
          Established Since 2020
        </h2>
        <div className="text-gray-800 font-bold  text-3xl xl:text-6xl space-y-2">
          <h2>We've been serving for</h2>
          <h2 className="bg-blue-800 p-2 mt-4 text-white transform -skew-x-12 inline-block z-100">
            over 5 years.
          </h2>
        </div>
        <p className="font-medium text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button>Latest Offers</Button>
      </div>
    </div>
  );
};

export default Info;
