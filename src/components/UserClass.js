import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "default",
        location: "default",
      },
    };
    console.log(this.props.name + "Child constructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child  componentDidMounted");
    const data = await fetch("https://api.github.com/users/izas-ahamed");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log(this.props.name + " Child componentDidUpdate called");
  }

  render() {
    console.log(this.props.name + "Child render called");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location || "default"}</h3>
        <h3>Contact : @thunderx</h3>
      </div>
    );
  }
}
