import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const internetStatus = useInternetStatus();
  return (
    //media query
    <div className="bg-gray-400 lg:bg-pink-100 md:bg-blue-100 sm:bg-yellow-100">
      <nav className="flex justify-between p-5 shadow-md">
        <div>
          <img className="h-12 w-12 shadow-md" alt="logo" src={LOGO_URL}></img>
        </div>
        <ul className="flex items-center">
          <li>Online Status:{internetStatus ? "🟢" : "⭕"}</li>
          <li className="px-3">
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about" className="nav-item">
              About Us
            </Link>
          </li>
          <li className="px-2">
            <Link to="/grocery" className="nav-item">
              Grocery
            </Link>
          </li>
          <li className="px-2">
            <Link to="/cart" className="nav-item">
              Cart
            </Link>
          </li>

          <button
            onClick={() =>
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
