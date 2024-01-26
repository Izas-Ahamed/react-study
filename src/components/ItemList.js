import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => dispatch(addItem(item));
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="text-left p-2 m-2 border-b-2 border-gray-300 flex justify-between"
        >
          <div className="mx-2">
            <div className="py-2 font-medium">
              <span>{item?.card?.info.name}</span>
              <span>
                - ₹
                {item?.card?.info.price / 100 ||
                  item?.card?.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="relative">
            <button
              className="bg-black text-white rounded-lg p-1 absolute bottom-0 ml-10 mb-[-5] shadow-lg"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <img
              src={IMG_URL + item?.card?.info?.imageId}
              alt="food_image"
              className="w-32"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
