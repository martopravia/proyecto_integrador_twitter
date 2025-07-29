import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import tweetsReducer from "./tweetsSlice";
import toastReducer from "./loginToastSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    tweets: tweetsReducer,
    toast: toastReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
