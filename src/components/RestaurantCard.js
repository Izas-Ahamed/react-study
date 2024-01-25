import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    resData?.info;

  return (
    <div className="w-[200px] h-[450px] bg-gray-300 p-2 m-2 rounded-lg hover:bg-gray-400">
      <img
        className="rounded-lg h-44 w-full"
        alt="card-img"
        src={IMG_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

//Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="bg-black text-white absolute top-[-15px] m-1  p-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
