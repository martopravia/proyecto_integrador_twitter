import axios from "axios";
import UserTweet from "../UserTweet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "../../redux/tweetsSlice";
import UserBanner from "../UserBanner";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const userTweets = useSelector((state) => state.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/users/${user.username}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch(setTweets(response.data.tweets.reverse()));
    };
    getUser();
  }, []);

  return (
    user && (
      <div>
        <div className="userBanner">
          <UserBanner
            firstname={user.firstname}
            lastname={user.lastname}
            username={user.username}
            profileImg={user.profileImg}
            followers={user.followers}
            following={user.following}
            description={user.description}
          />
        </div>

        <ul className="p-0" style={{ listStyleType: "none" }}>
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
