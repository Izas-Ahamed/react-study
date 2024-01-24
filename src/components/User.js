import { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState({
    userInfo: {
      name: "default",
      location: "default",
    },
  });

  const { name, location, avatar_url } = data?.userInfo;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/izas-ahamed");
    const json = await data.json();
    setData({ userInfo: json });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello from SetInterval");
    }, 1000);

    //unmount phase
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <img src={avatar_url}></img>
      <h2>Name: {name}</h2>
      <h3>Location: {location || "default"}</h3>
      <h3>Contact : @thunderx</h3>
    </div>
  );
};
export default User;
