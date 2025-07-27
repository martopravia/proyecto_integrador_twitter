import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setLogin: (state, action) => {
      return action.payload;
    },
    setLogout: () => {
      return null;
    },
    toggleFollowUser: (state, action) => {
      const userToFollowId = action.payload;

      const alreadyFollowing = state.following.some(
        (user) => String(user._id) === String(userToFollowId)
      );
      console.log(alreadyFollowing);
      if (alreadyFollowing) {
        state.following = state.following.filter(
          (user) => String(user._id) !== String(userToFollowId)
        );
      }
    },
    updateFollowing: (state, action) => {
      state.following = action.payload; //
    },
  },
});

export const { setLogin, setLogout, toggleFollowUser, updateFollowing } =
  userSlice.actions;
export default userSlice.reducer;
