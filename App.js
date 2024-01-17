//nested html structure
/*
*<div id="parent">
    <div id="child1">
        <h1> Hi from react </h1>
        <h2> Hello from react </h1>
    </div>
    <div id="child2">
        <h1> Hi from react </h1>
        <h2> Hello from react </h1>
    </div>
</div>
*
*
*/

//throws warning =>  Each child in a list should have a unique "key" prop
const element = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi from React"),
    React.createElement("h2", {}, "Hello from React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi from React"),
    React.createElement("h2", {}, "Hello from React"),
  ]),
]);

console.log(element); // prints object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
