import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="header">Hello From JSX 🚀</h1>;

console.log(heading); // prints object

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);
