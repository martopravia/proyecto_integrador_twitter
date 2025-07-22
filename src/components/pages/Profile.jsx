import axios from "axios";
import UserTweet from "../UserTweet";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "../../redux/tweetsSlice";

const Profile = () => {
  const [user, setUser] = useState(null);
  //   const [userTweets, setUserTweets] = useState([]);
  const userTweets = useSelector((state) => state.tweets);
  const token = useSelector((state) => state.user.token);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/users/${username}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
      dispatch(setTweets(response.data.tweets));
    };

    getUser();
  }, []);

  console.log(userTweets);

  return (
    user && (
      <div>
        <ul style={{ listStyleType: "none" }}>
          {userTweets.map((tweet) => (
            <li key={tweet._id}>
              <UserTweet
                text={tweet.text}
                firstname={user.firstname}
                lastname={user.lastname}
                username={user.username}
                profileImg={user.profileImg}
                createdAt={tweet.createdAt}
                likes={tweet.likes}
                tweetId={tweet._id}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Profile;
