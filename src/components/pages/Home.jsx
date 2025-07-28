import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets, addNewTweet } from "../../redux/tweetsSlice";
import OneTweet from "../OneTweet";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Home = () => {
  const latestTweets = useSelector((state) => state.tweets);
  const { token, userId, userImg } = useSelector((state) => state.user);
  const isLocalImage = !userImg.includes("http");
  const dispatch = useDispatch();
  const [newTweetText, setNewTweetText] = useState("");
  // const [submittedTweets, ] = useState(0);

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/tweets`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Login successfull");
      dispatch(setTweets(response.data));
    };
    getTweets();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const addTweet = async () => {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/tweets`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          text: newTweetText,
          user: userId,
        },
      });

      console.log(response);
      dispatch(addNewTweet(response.data));
    };
    addTweet();
    setNewTweetText("");
    // setSubmittedTweets(submittedTweets + 1); //TODO: dispatch addTweet con push, agregarlo a la lista de twt del store
  }

  return (
    token && (
      <>
        <div className="container-home-background">
          <div
            className="mx-auto border border-secondary"
            style={{ minHeight: "100vh" }}
          >
            <div className="p-3">
              <h5>Home</h5>
            </div>

            <div className="d-flex p-3">
              <div className="me-3">
                <img
                  src={
                    isLocalImage
                      ? `${import.meta.env.VITE_API_URL}/img/${userImg}`
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
    )
  );
};

export default Home;
