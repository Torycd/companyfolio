import React, { useState, useEffect } from "react";
import MenuCard from "../Card/MenuCard";

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
    <ul className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {designs.map((design) => (
        <MenuCard
          id={design.id}
          name={design.name}
          votes={design.votes}
          type={design.type}
          key={design.id}
          price={design.price}
          rating={design.rating}
        />
      ))}
    </ul>
  );
};

export default Designs;
