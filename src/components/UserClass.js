import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Contact : @thunderx</h3>
      </div>
    );
  }
}
