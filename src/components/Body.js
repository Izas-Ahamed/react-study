import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [data, setData] = useState(mockData);
  return (
    <div class="body">
      <div class="filter">
        <button
          class="filter-btn"
          onClick={() => {
            let filteredData = data.filter(
              (restaurant) => restaurant.info.avgRating > 4.4
            );
            setData(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {data.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
