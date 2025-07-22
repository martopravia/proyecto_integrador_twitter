import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleLikeTweet } from "../redux/tweetsSlice";

const UserTweet = ({
  text,
  firstname,
  lastname,
  username,
  profileImg,
  createdAt,
  likes,
  tweetId,
}) => {
  const token = useSelector((state) => state.user.token);
  const loggedUser = useSelector((state) => state.user.userId);
  const localImage = profileImg.indexOf("https://");
  const isLiked = likes.includes(loggedUser);
  const dispatch = useDispatch();

  function handleLike() {
    const LikeTweets = async () => {
      const response = await axios({
        method: "PATCH",
        url: `http://localhost:3000/tweets/${tweetId}/likes`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          userId: loggedUser,
        },
      });

      dispatch(
        toggleLikeTweet({
          tweetId,
          loggedUser,
        })
      );
    };
    LikeTweets();
  }

  return (
    <div>
      <img
        src={
          localImage !== -1
            ? profileImg
            : `http://localhost:3000/img/${profileImg}`
        }
        alt="profile image"
      />
      <h5>
        {firstname} {lastname} @{username} ·{" "}
        {new Date(createdAt).toLocaleDateString()}
      </h5>
      <p>{text}</p>
      {isLiked ? (
        <>
          <i
            className="bi bi-heart-fill"
            style={{ color: "red" }}
            onClick={handleLike}
          ></i>
          <span style={{ color: "red" }}> {likes.length}</span>
        </>
      ) : (
        <>
          <i className="bi bi-heart" onClick={handleLike}></i>
          <span> {likes.length}</span>
        </>
      )}
      <span>
        <i className="bi bi-trash3-fill"></i>
      </span>
    </div>
  );
};

export default UserTweet;
