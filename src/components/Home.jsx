import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/tweets",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODY0Mzg0NDE4N2JiMzc5ZDk5Yjg0YzIiLCJpYXQiOjE3NTI3NjE2MzN9.7S6zkIDnsbsMDnmdJB-VRcZhc74hlouLvgU-wEIeZII`,
        },
      });
      console.log(response.data);
      setTweets(response.data);
    };
    getTweets();
  }, []);
  return <div>Home</div>;
};

export default Home;
