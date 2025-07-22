import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets, deleteTweet } from "../../redux/tweetsSlice";
import OneTweet from "../OneTweet";
import { Link, Navigate, useNavigate } from "react-router";

const Home = () => {
  const latestTweets = useSelector((state) => state.tweets);
  const { token, userId, userImg } = useSelector((state) => state.user);
  const isLocalImage = !userImg.includes("http");
  const dispatch = useDispatch();
  const [newTweetText, setNewTweetText] = useState("");
  const [submittedTweets, setSubmittedTweets] = useState(0);
  const username = useSelector((state) => state.user.username);

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
    <>
      <div className=" container-home-background">
        <div
          className="col-md-5 mx-auto border-start border-end border-secondary"
          style={{ minHeight: "100vh" }}
        >
          <div className="p-3  border-secondary">
            <h5>Home</h5>
          </div>

          {/* Formulario */}
          <div className="d-flex p-3 border-bottom border-secondary">
            <div className="me-3">
              <img
                src={
                  isLocalImage
                    ? `http://localhost:3000/img/${userImg}`
                    : userImg
                }
                alt="profile"
                className="rounded-circle"
                style={{ width: "48px", height: "48px", objectFit: "cover" }}
              />
            </div>
            <div className="flex-grow-1">
              <form onSubmit={handleSubmit}>
                <textarea
                  className="form-control mb-2 bg-transparent text-white border-0 no-resize"
                  placeholder="What's happening?"
                  value={newTweetText}
                  onChange={(e) => setNewTweetText(e.target.value)}
                  rows={2}
                ></textarea>
                <div className="text-end my-3">
                  <button className="btn btn-primary rounded-pill px-4">
                    Tweet
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Tweets */}
          <ul className="p-0 m-0" style={{ listStyleType: "none" }}>
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
      </div>
    </>
  );
};

export default Home;
