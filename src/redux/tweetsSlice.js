import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweet",
  initialState: [],
  reducers: {
    setTweets: (state, action) => {
      return action.payload;
    },
    deleteTweet: (state, action) => {
      const tweetId = action.payload;
      return state.filter((tweet) => tweet._id !== tweetId);
    },
    toggleLikeTweet: (state, action) => {
      const { tweetId, loggedUser } = action.payload;
      const clickedTweet = state.find((tweet) => tweet._id === tweetId);
      let clickedTweetLikes = clickedTweet.likes;
      const isLiked = clickedTweetLikes.includes(loggedUser);
      isLiked
        ? (clickedTweet.likes = clickedTweetLikes.filter(
            (userId) => userId !== loggedUser
          ))
        : clickedTweetLikes.push(loggedUser);
    },
    addNewTweet: (state, action) => {
      const newTweet = action.payload.newTweet;
      console.log("El nuevo tweet es: ", newTweet);
      state.unshift(newTweet);
    },

    resetTweetsState: () => [],
  },
});

export const {
  setTweets,
  deleteTweet,
  toggleLikeTweet,
  resetTweetsState,
  addNewTweet,
} = tweetsSlice.actions;
export default tweetsSlice.reducer;
