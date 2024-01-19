import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img
            alt="logo"
            src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png"
          ></img>
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        alt="card-img"
        src="https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?w=740&t=st=1705642988~exp=1705643588~hmac=cd95fee56e8e35025baa6263f77d0ee02009d1c68024cd81373cc3ff393c2884"
      ></img>
      <h3>Royal Foods</h3>
      <h4>Shawarma, Arabian</h4>
      <h4>4.4 stars</h4>
    </div>
  );
};

const Main = () => {
  return (
    <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div>Search</div>
      <Main />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
