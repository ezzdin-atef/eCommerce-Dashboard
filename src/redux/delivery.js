import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const deliverySlice = createSlice({
  name: "delivery",
  initialState: {
    value: [
      {
        id: Math.random() * 100000,
        name: "TP-Link Router",
        buyer: "Eslam Mohamed",
        status: "Shipped",
      },
      {
        id: Math.random() * 100000,
        name: "TP-Link Router",
        buyer: "Mahmoud Sobhy",
        status: "Delivered",
      },
      {
        id: Math.random() * 100000,
        name: "TP-Link Router",
        buyer: "Ahmed Abo Bakr",
        status: "Arrived",
      },
      {
        id: Math.random() * 100000,
        name: "TP-Link Router",
        buyer: "Eslam Mohamed",
        status: "Shipped",
      },
      {
        id: Math.random() * 100000,
        name: "TP-Link Router",
        buyer: "LOL",
        status: null,
      },
    ],
  },
  reducers: {
    update: (state, action) => {
      const index = state.value.findIndex((el) => el.id === action.payload);
      const item = state.value[index];
      const statuses = ["Shipped", "Arrived", "Delivered"];
      item.status = statuses[statuses.findIndex((s) => s === item.status) + 1];
      toast.dark(`"${item.name}" has been ${item.status} successfully ✌`);
    },
  },
});

export const { update } = deliverySlice.actions;

export default deliverySlice.reducer;
