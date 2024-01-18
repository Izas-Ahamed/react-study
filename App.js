import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="header">Hello From Title Component 🚀</h1>;
//component composition
const Header = () => (
  <div id="container">
    <Title />
    <h1>Hi from header component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
