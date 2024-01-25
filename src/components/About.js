import { Component } from "react";
import User from "./User";
import UserContext from "../utils/UserContext";
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
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold text-lg">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <User name="First" location="In Outer Space" />
      </div>
    );
  }
}

export default About;
