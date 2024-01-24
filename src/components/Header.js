import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const internetStatus = useInternetStatus();
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img alt="logo" src={LOGO_URL}></img>
        </div>
        <ul className="nav-items">
          <li>Online Status:{internetStatus ? "🟢" : "⭕"}</li>
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About Us
          </Link>
          <Link to="/cart" className="nav-item">
            Cart
          </Link>
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
