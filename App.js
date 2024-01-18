import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="header">Hello From Title Component 🚀</h1>;

const SpanElement = () => <span>Im span component</span>;

//react element
const element = (
  <div>
    <h1>This is react element </h1>
    <SpanElement />
  </div>
);
const number = 100;

const Header = () => (
  <div id="container">
    {/* all are same */}
    {Title()}
    <Title />
    <Title></Title>

    {/* rendering element */}
    {element}

    <h1>Hi from header component</h1>

    {/* Javascript code inside JSX */}
    {console.log("thunderx")}
    {number + 1}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
