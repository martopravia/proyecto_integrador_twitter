import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  username: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      const { token, username } = action.payload;
      state.token = token;
      state.username = username;
    },
    setLogout: (state, action) => {
      state.token = "";
      state.username = "";
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice.reducer;
