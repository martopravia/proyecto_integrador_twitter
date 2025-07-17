import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    user: userReducer,
  },
});

export default store;
