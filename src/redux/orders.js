import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    value: [
      {
        id: "1355689478",
        title: "TP-Link Router",
        by: "Souq",
        condition: "New",
        status: "Shipped",
        rate: null,
      },
      {
        id: "13553699478",
        title: "Head First Java",
        by: "Amazon",
        condition: "New",
        status: "Arrived",
        rate: null,
      },
      {
        id: "14513456457",
        title: "Cracking the Coding Interview",
        by: "Laakmann McDowell",
        condition: "Used",
        status: "Delivered",
        rate: null,
      },
      {
        id: "3213546598",
        title: "Eloquent JavaScript",
        by: "Marijn Haverbeke",
        condition: "New",
        status: "Delivered",
        rate: "4",
      },
    ],
  },
  reducers: {
    rate: (state, action) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value[index].rate = action.payload.rate;
    },
  },
});

export const { rate } = ordersSlice.actions;

export default ordersSlice.reducer;
