import useRestaurantMenu from "../utils/useRestaurantMenu";
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

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h2>
        {city}, {areaName}
      </h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards ? (
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}- RS.
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))
        ) : (
          <h1>NO MENU DATA</h1>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
