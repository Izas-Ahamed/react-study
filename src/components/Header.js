import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img alt="logo" src={LOGO_URL}></img>
        </div>
        <ul className="nav-items">
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
