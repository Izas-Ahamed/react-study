//nested html structure
/*
*<div id="parent">
    <div id="child">
        <h1> Hi from react </h1>
        <h2> Hello from react </h1>
    </div>
</div>
*
*
*/

const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi from React"),
    React.createElement("h2", {}, "Hello from React"),
  ])
);

console.log(element); // prints object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
