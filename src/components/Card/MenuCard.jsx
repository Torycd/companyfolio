import React from "react";
import image from "../../images/heoImg.jpeg";
import { FaStar } from "react-icons/fa";

const MenuCard = ({ design }) => {
  return (
    <li className="bg-gray-200 rounded-md group" key={design.id}>
      <div className="relative h-[60%]">
        <img
          src={image}
          className="w-full rounded-t-md h-full object-cover"
          alt={`Item  ${design.id}`}
        />
        <div className="absolute rounded-full bottom-2 left-2 bg-white  text-gray-700 px-4 py-1">
          <div className="flex justify-center items-center">
            <span>
              <FaStar className="text-yellow-500" size={15} />
            </span>
            <p className="font-bold">{design.rating}</p>
            <div className="text-[12px] font-semibold ml-2">
              ({design.votes})
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40%] flex flex-col gap-4 p-3">
        <h3 className="text-xl font-bold">{design.name}</h3>
        <p className="font-semibold">{design.type}</p>
        <p className="text-xl font-extrabold">
          ₦{design.price.toLocaleString()}
        </p>
      </div>
    </li>
  );
};

export default MenuCard;
