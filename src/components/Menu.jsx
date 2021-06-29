import React from "react";
import { useSelector } from "react-redux";
import logo from "../img/logo-mini.png";
import Notifications from "./Notifications";
import ShoppingCart from "./ShoppingCart";

const Menu = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="menu">
      <ul className="list">
        <ShoppingCart />
        <Notifications />
        <li>
          <div className="user">
            <img src={user.image} alt={user.username} />
            <h3>{user.name}</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
