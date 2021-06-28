import { createSlice } from "@reduxjs/toolkit";
import applewatch from "../img/apple-watch.jpg";
import iphoneX from "../img/IPhone-X.jpg";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    value: [
      {
        id: "5165465486",
        img: applewatch,
        title: "Apple Watch Series 3",
        price: "800",
        count: "1",
        stock: "12",
      },
      {
        id: "3465464654",
        img: iphoneX,
        title: "IPhone X - Silver 64GB",
        price: "1200",
        count: "1",
        stock: "61",
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index === -1) {
        state.value.push({ ...action.payload, count: 1 });
      } else {
        state.value[index].count = action.payload.value
          ? action.payload.value
          : parseInt(state.value[index].count, 10) + 1;
      }
    },
    remove: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
  },
});

export const { add, remove } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
