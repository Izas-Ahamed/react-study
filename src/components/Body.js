import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";

const Body = () => {
  return (
    <div className="res-container">
      {mockData.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default Body;
