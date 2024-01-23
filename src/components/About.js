import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name="Ijas (Functional)" location="In Deep Space" />
      <UserClass name="Ijas (Class)" location="In Outer Space" />
    </div>
  );
};

export default About;
