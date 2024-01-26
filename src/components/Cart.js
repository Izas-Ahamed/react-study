import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className=" font-bold text-2xl">Cart</h1>
      {cartItems.length ? (
        <button
          className="bg-black text-white rounded-lg p-1 shadow-lg"
          onClick={handleClearCart}
        >
          Clear
        </button>
      ) : (
        <h1>Cart is empty. Add items to the cart!</h1>
      )}
      <div className="w-6/12 mx-auto shadow-lg bg-slate-200 ">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
