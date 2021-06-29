import { createSlice } from "@reduxjs/toolkit";
import applewatch from "../img/apple-watch.jpg";
import huaweiLaptop from "../img/huawei-honor-magicbook.jpg";
import SamsungGalaxyS20 from "../img/Samsung-Galaxy-S20.jpg";
import samsungnote20 from "../img/samsung-note20.png";
import asus from "../img/asus.jpg";
import hp from "../img/hp.jpg";
import lenovoideapad from "../img/lenovo-ideapad.png";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [
      {
        id: "5465465456",
        img: samsungnote20,
        name: "Samsung Note 20",
        price: "999",
        stock: "3000",
      },
      {
        id: "6484541",
        img: asus,
        name: "Philips Headphone",
        price: "335",
        stock: "15",
      },
      {
        id: "8945612132161",
        img: hp,
        name: "HP Laptop",
        price: "1300",
        stock: "30",
      },
      {
        id: "61616515165",
        img: lenovoideapad,
        name: "Lenovo IdeaPad",
        price: "899",
        stock: "100",
      },
      {
        id: "23515611561",
        img: applewatch,
        name: "Apple Watch Series 3",
        price: "335",
        stock: "15",
      },
      {
        id: "654894894984",
        img: huaweiLaptop,
        name: "HUAWEI Honor Magicbook",
        price: "1399",
        stock: "26",
      },
      {
        id: "8978461321",
        img: SamsungGalaxyS20,
        name: "Samsung Galaxy S20 Ultra",
        price: "1099",
        stock: "10",
      },
    ],
  },
  reducers: {
    remove: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
    add: (state, action) => {
      state.value.push({ ...action.payload, id: new Date().valueOf() });
    },
    update: (state, action) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value[index] = action.payload;
    },
  },
});

export const { remove, add, update } = productsSlice.actions;

export default productsSlice.reducer;
