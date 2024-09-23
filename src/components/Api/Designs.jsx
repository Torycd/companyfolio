import React, { useState, useEffect } from "react";
import image from "../../images/heoImg.jpeg";
import { FaStar } from "react-icons/fa";

const Designs = ({ type }) => {
  const [designs, setDesigns] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const designsRun = async () => {
      try {
        const response = await fetch(
          `https://design-b7ce4-default-rtdb.firebaseio.com/${type}.json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const designsArray = data
          ? Object.entries(data).map(([id, details]) => ({ id, ...details }))
          : [];

        setDesigns(designsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch designs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    designsRun();
  }, [type]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (designs.length === 0) return <div>No designs found for {type}</div>;

  return (
    <ul className="grid grid-cols-4 gap-10">
      {designs.map((design) => (
        <li className="bg-gray-200 rounded-md" key={design.id}>
          <div className="relative h-[60%]">
            <img
              src={image}
              className="w-full rounded-t-md h-full object-cover"
              alt={`Item  ${design.id}`}
            />
            <div className="absolute rounded-full bottom-2 left-2 bg-white  text-gray-700 px-4 py-1">
              <div className="flex justify-center items-center">
                <span><FaStar className="text-yellow-500" size={15}/></span>
                <p className="font-bold">{design.rating}</p>
                <div className="text-[12px] font-semibold ml-2">({design.votes})</div>
              </div>
            </div>
          </div>

          <div className="h-[40%] flex flex-col gap-4 p-3">
            <h3 className="text-xl font-bold">{design.name}</h3>
            <p className="font-semibold">{design.type}</p>
            <p className="text-xl font-extrabold">₦{design.price.toLocaleString()}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Designs;
