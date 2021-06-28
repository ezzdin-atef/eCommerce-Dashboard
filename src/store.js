import { configureStore } from "@reduxjs/toolkit";
import notificationsSlice from "./redux/notifications";
import productsSlice from "./redux/products";
import shoppingCartSlice from "./redux/shoppingCart";
import userSlice from "./redux/user";
import wishlistSlice from "./redux/wishlist";
import ordersSlice from "./redux/orders";

export default configureStore({
  reducer: {
    notifications: notificationsSlice,
    products: productsSlice,
    shoppingCart: shoppingCartSlice,
    user: userSlice,
    wishlist: wishlistSlice,
    orders: ordersSlice,
  },
});
