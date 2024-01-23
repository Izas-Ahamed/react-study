import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
/*
Life cycle diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
                    1. Render Phase
                    2. Commit Phase
*/

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor called");
  }
  componentDidMount() {
    // console.log("Parent componentDidMounted called");
  }
  render() {
    // console.log("Parent Render Called");
    return (
      <div>
        <h1>About</h1>
        <UserClass name="First" location="In Outer Space" />
      </div>
    );
  }
}

export default About;
