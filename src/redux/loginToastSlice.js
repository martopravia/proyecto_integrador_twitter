import { createSlice } from "@reduxjs/toolkit";

const loginToastSlice = createSlice({
  name: "toast",
  initialState: false,
  reducers: {
    setLoginToastShown: () => true,
    resetLoginToast: () => false,
  },
});

export const { setLoginToastShown, resetLoginToast } = loginToastSlice.actions;
export default loginToastSlice.reducer;
