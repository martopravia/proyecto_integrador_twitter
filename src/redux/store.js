import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import tweetsReducer from "./tweetsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    tweets: tweetsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
