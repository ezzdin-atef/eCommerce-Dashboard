import { createSlice } from "@reduxjs/toolkit";
import userImage from "../img/user.jpeg";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      image: userImage,
      username: "ezzdin_atef",
      name: "Ezzdin Atef",
      email: "ezzdin1125@gmail.com",
      your_website: "https://ezzdinatef.me",
      twitter: "https://twitter.com/ezzdin_atef",
    },
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = userSlice.actions;

export default userSlice.reducer;
