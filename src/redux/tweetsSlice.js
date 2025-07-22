import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweet",
  initialState: [],
  reducers: {
    setTweets: (state, action) => {
      return action.payload;
    },
    deleteTweet: (state, action) => {
      return state.filter((tweet) => tweet._id !== action.payload._id);
    },
    toggleLikeTweet: (state, action) => {
      const { tweetId, loggedUser } = action.payload;
      const clickedTweet = state.find((tweet) => tweet._id === tweetId);
      let clickedTweetLikes = clickedTweet.likes;
      console.log(JSON.stringify(clickedTweetLikes));
      const isLiked = clickedTweetLikes.includes(loggedUser);
      isLiked
        ? (clickedTweet.likes = clickedTweetLikes.filter(
            (userId) => userId !== loggedUser
          ))
        : clickedTweetLikes.push(loggedUser);
    },
  },
});

export const { setTweets, deleteTweet, toggleLikeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
