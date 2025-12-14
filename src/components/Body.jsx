import RestaurantCard from "./RestaurantCard";
import "../index.css";
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const query = `
        [out:json];
        node
          ["amenity"="restaurant"]
          (18.52,73.85,18.60,73.95);
        out;
        `;
    try {
      const response = await fetch(CDN_URL, {
        method: "POST",
        body: query,
      });

      const jsonData = await response.json();
      setListOfRestaurants(jsonData.elements);
    } catch (error) {
      console.log("Service failed", error);
    }
  };

  const filteredWithCuisine = () => {
    const filterList = listOfRestaurants.filter((el) => !!el.tags.cuisine);
    setListOfRestaurants(filterList);
  };

  return (
    <div className="body">
      <div className="filter-container">
        <button className="filter-btn" onClick={filteredWithCuisine}>
          Cuisine Restaurants Only
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((rest) => {
          return (
            <RestaurantCard
              key={rest?.id}
              name={rest?.tags?.name}
              cuisine={rest?.tags?.cuisine}
            />
          );
        })}
      </div>
      {/* <h1>Body</h1> */}
    </div>
  );
};

export default Body;
