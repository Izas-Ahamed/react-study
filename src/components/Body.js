import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [data, setData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [inputData, setInputData] = useState("");
  const internetStatus = useInternetStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

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
      <div className="flex flex-wrap m-2 items-center">
        <div>
          <input
            className="p-1 border-2 border-solid 1px border-black rounded-lg"
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            className="bg-green-300 rounded-lg px-2 py-1 m-2"
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
          className="bg-slate-400 rounded-lg px-2 py-1 m-2"
          onClick={() => {
            let filteredData = data.filter(
              (restaurant) => restaurant?.card?.card?.info?.avgRating > 4
            );
            setFilteredRestaurant(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
        <div>
          <label>Username: </label>
          <input
            className="p-1 border-2 border-solid 1px border-black rounded-lg"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.card?.card?.info?.id}
            key={restaurant?.card?.card?.info?.id}
          >
            {restaurant?.card?.card?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.card?.card} />
            ) : (
              <RestaurantCard resData={restaurant?.card?.card} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
