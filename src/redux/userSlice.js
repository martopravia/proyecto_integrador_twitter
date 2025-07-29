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
      const userToFollow = action.payload; //trae el id
      console.log(userToFollow);
      const userToFollowId = userToFollow._id;
      console.log("el userTOFollowId es: ", userToFollowId);

      const alreadyFollowing = state.following.some(
        (user) => String(user._id) === String(userToFollowId)
      );
      console.log(alreadyFollowing);
      if (alreadyFollowing) {
        state.following = state.following.filter(
          (user) => String(user._id) !== String(userToFollowId)
        );
      } else {
        console.log("Dentro del else");
        state.following.push(userToFollow);
        // state.following = [...state.following, userToFollowId];
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
