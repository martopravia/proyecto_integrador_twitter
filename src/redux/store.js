import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    login: loginReducer,
  },
});

export default store;
