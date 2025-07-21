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
    // likeTweet: (state, action) => {
    //   return state.filter((tweet) => tweet._id !== action.payload._id);
    // },
  },
});

export const { setTweets, deleteTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
