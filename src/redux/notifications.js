import { createSlice } from "@reduxjs/toolkit";

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    value: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
  },
  reducers: {
    remove: (state, action) => {
      state.value = state.value.filter((el) => el !== action.payload);
    },
  },
});

export const { remove } = notificationsSlice.actions;

export default notificationsSlice.reducer;
