import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img alt="logo" src={LOGO_URL}></img>
        </div>
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Cart</li>
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
