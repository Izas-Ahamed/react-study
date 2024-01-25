import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="w-6/12 p-4 m-4 bg-gray-100 shadow-lg mx-auto">
      <div
        className="flex justify-between mb-2 cursor-pointer"
        onClick={() => setShowItem(!showItem)}
      >
        <span className="font-bold ">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItem ? "🔼" : "🔽"}</span>
      </div>
      {showItem && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
