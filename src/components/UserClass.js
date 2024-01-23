import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "Child constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + "Child  componentDidMounted");
  }

  render() {
    console.log(this.props.name + "Child render called");

    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact : @thunderx</h3>
      </div>
    );
  }
}
