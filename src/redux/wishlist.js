import { createSlice } from "@reduxjs/toolkit";
import applewatch from "../img/apple-watch.jpg";
import PerregauxWatch from "../img/Girard-Perregaux-Watch.jpg";
import huaweiLaptop from "../img/huawei-honor-magicbook.jpg";
import iphoneX from "../img/IPhone-X.jpg";
import SamsungGalaxyS20 from "../img/Samsung-Galaxy-S20.jpg";
import VinceroWatch from "../img/Vincero-Watch.jpg";
import samsungFold from "../img/samsung-fold.jpg";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [
      {
        id: "5165465486",
        img: applewatch,
        title: "Apple Watch Series 3",
        price: "800",
        stock: "12",
      },
      {
        id: "3465464654",
        img: iphoneX,
        title: "IPhone X - Silver 64GB",
        price: "1200",
        stock: "61",
      },
      {
        id: "3545465465",
        img: PerregauxWatch,
        title: "Girard Perregaux Watch",
        price: "700",
        stock: "79",
      },
      {
        id: "689789456",
        img: VinceroWatch,
        title: "Vincero Watch",
        price: "500",
        stock: "135",
      },
      {
        id: "897654132135",
        img: huaweiLaptop,
        title: "HUAWEI Honor Magicbook",
        price: "2200",
        stock: "150",
      },
      {
        id: "68789451352",
        img: SamsungGalaxyS20,
        title: "Samsung Galaxy S20 Ultra",
        price: "1100",
        stock: "18",
      },
      {
        id: "8978461321",
        img: samsungFold,
        title: "Samsung Galaxy Fold Z",
        price: "2200",
        stock: "13",
      },
    ],
  },
  reducers: {
    remove: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
  },
});

export const { remove } = wishlistSlice.actions;

export default wishlistSlice.reducer;
