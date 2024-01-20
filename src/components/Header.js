import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
        </ul>
      </nav>
    </div>
  );
};
export default Header;
