import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteTweet, toggleLikeTweet } from "../redux/tweetsSlice";

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
  //TODO: instantiate both token and loggedUser variables as deconstrucion of state.user
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

  function handleDelete() {
    const dropTweet = async () => {
      const response = await axios({
        method: "DELETE",
        url: `http://localhost:3000/tweets/${tweetId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(deleteTweet(tweetId));
    };
    dropTweet();
  }

  return (
    <div
      className="d-flex p-3 border border-secondary"
      style={{ backgroundColor: "#171f2e", color: "white" }}
    >
      <div className="me-3">
        <img
          src={
            localImage !== -1
              ? profileImg
              : `http://localhost:3000/img/${profileImg}`
          }
          alt="profile image"
          className="rounded-circle"
          style={{ width: "35px", height: "35px", objectFit: "cover" }}
        />
      </div>
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between">
          <div>
            <strong>
              {firstname} {lastname}
            </strong>{" "}
            <span className="username-date-color">
              @{username} · {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <p className="mb-1">{text}</p>
        <div className="d-flex justify-content-between">
          {isLiked ? (
            <div>
              <i
                className="bi bi-heart-fill me-1"
                style={{ color: "deeppink", cursor: "pointer" }}
                onClick={handleLike}
              ></i>
              <span style={{ color: "deeppink" }}> {likes.length}</span>
            </div>
          ) : (
            <div>
              <i className="bi bi-heart" onClick={handleLike}></i>
              <span> {likes.length}</span>
            </div>
          )}
          <div>
            <span>
              <i
                className="bi bi-trash3-fill me-1"
                style={{ cursor: "pointer" }}
                onClick={handleDelete}
              ></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTweet;
