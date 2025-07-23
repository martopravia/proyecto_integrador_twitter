import { useDispatch, useSelector } from "react-redux";
import { toggleLikeTweet } from "../redux/tweetsSlice";
import axios from "axios";

const OneTweet = ({
  text,
  firstname,
  lastname,
  username,
  profileImg,
  createdAt,
  likes,
  tweetId,
}) => {
  const loggedUser = useSelector((state) => state.user.userId);
  const localImage = profileImg?.indexOf("https://");
  const isLiked = likes.includes(loggedUser);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

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
          alt="profile"
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
        <div>
          {isLiked ? (
            <>
              <i
                className="bi bi-heart-fill me-1"
                style={{ color: "deeppink", cursor: "pointer" }}
                onClick={handleLike}
              ></i>
              <span style={{ color: "deeppink" }}>{likes.length}</span>
            </>
          ) : (
            <>
              <i
                className="bi bi-heart me-1"
                style={{ cursor: "pointer" }}
                onClick={handleLike}
              ></i>
              <span>{likes.length}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OneTweet;
