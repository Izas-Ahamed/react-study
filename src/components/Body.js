import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
const Body = () => {
  const [data, setData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [inputData, setInputData] = useState("");
  const internetStatus = useInternetStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&collection=83647&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    setData(json.data.cards.slice(2));
    setFilteredRestaurant(json.data.cards.slice(2));
  };

  if (!internetStatus) return <h1>Looks Like you are offline! 😿</h1>;

  return filteredRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            onClick={() => {
              let filteredData = data.filter((res) =>
                res?.card?.card?.info?.name
                  .toLowerCase()
                  .includes(inputData.toLowerCase())
              );
              setFilteredRestaurant(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredData = data.filter(
              (restaurant) => restaurant?.card?.card?.info?.avgRating > 4
            );
            setFilteredRestaurant(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.card?.card?.info?.id}
            key={restaurant?.card?.card?.info?.id}
          >
            <RestaurantCard resData={restaurant?.card?.card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
