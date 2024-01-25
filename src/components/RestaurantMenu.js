import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuData = useRestaurantMenu(resId);

  if (!resMenuData) return <Shimmer />;

  const { name, city, cuisines, costForTwoMessage, areaName } =
    resMenuData?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const categories =
    resMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => "itemCards" in category?.card?.card
    );
  console.log(categories);
  return (
    <div className="text-center ">
      <h1 className="font-bold mt-3 text-2xl">{name}</h1>
      <h2 className="font-bold mb-3">
        {city}, {areaName}
      </h2>
      <p className="font-medium">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
