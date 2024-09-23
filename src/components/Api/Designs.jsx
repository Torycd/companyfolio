import React, { useState, useEffect } from "react";

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
        <li key={design.id}>
          <img src="" className="" alt={`Item  ${design.id}`} />
          <h3>{design.name}</h3>
          <p>Type: {design.type}</p>
          <p>Price: ₦{design.price.toLocaleString()}</p>
          <p>
            Rating: {design.rating} ({design.votes} votes)
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Designs;
