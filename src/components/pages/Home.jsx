import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets, deleteTweet } from "../../redux/tweetsSlice";
import OneTweet from "../OneTweet";

const Home = () => {
  const latestTweets = useSelector((state) => state.tweets);
  const { token, userId, userImg } = useSelector((state) => state.user);
  const isLocalImage = !userImg.includes("http");
  const dispatch = useDispatch();
  const [newTweetText, setNewTweetText] = useState("");
  const [submittedTweets, setSubmittedTweets] = useState(0);

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/tweets",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setTweets(response.data));
    };
    getTweets();
  }, [submittedTweets]);

  function handleSubmit(e) {
    e.preventDefault();
    const addTweet = async () => {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/tweets",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          text: newTweetText,
          user: userId,
        },
      });
    };
    addTweet();
    setNewTweetText("");
    setSubmittedTweets(submittedTweets + 1);
  }

  return (
    <div>
      <h3>Home</h3>
      <img
        src={isLocalImage ? `http://localhost:3000/img/${userImg}` : userImg}
        alt="profile image"
      />

      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="newTweet"></label>
        <textarea
          name="newTweet"
          id="newTweet"
          style={{ height: 50 }}
          placeholder="What's happening?"
          value={newTweetText}
          onChange={(e) => setNewTweetText(e.target.value)}
        ></textarea>
        <button className="btn btn-primary rounded-pill">Tweet</button>
      </form>

      <ul className="p-0" style={{ listStyleType: "none" }}>
        {latestTweets.map((tweet) => (
          <li key={tweet._id}>
            <OneTweet
              text={tweet.text}
              firstname={tweet.user.firstname}
              lastname={tweet.user.lastname}
              username={tweet.user.username}
              profileImg={tweet.user.profileImg}
              createdAt={tweet.createdAt}
              likes={tweet.likes}
              tweetId={tweet._id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
