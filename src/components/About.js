import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  componentDidMount() {
    console.log("About Parent Mounted");
  }
  render() {
    console.log("About Render Called");
    return (
      <div>
        <h1>About</h1>
        <UserClass name="Ijas (Class)" location="In Outer Space" />
      </div>
    );
  }
}

export default About;
