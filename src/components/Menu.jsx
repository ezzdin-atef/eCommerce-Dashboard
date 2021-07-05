import React from "react";
import { useSelector } from "react-redux";
import Notifications from "./Notifications";
import ShoppingCart from "./ShoppingCart";

const Menu = () => {
  const user = useSelector((state) => state.user.value);

  // Handle Collapse
  const handleCollapse = (e) => {
    console.log();
    e.target.parentNode.parentNode.parentNode.classList.toggle("minimal");
  };

  return (
    <div className="menu">
      <span className="collapse fas fa-bars" onClick={handleCollapse}></span>
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
