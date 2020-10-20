import React from 'react';
import logo from "../img/logo-mini.png";
import user from "../img/user.jpeg";
import Notifications from './Notifications';
import ShoppingCart from './ShoppingCart';

const Menu = () => {
  return (
    <div className="menu">
      <img src={logo} alt="logo" />
      <ul className="list">
        <ShoppingCart />
        <Notifications />
        <li>
          <div className="user">
            <img src={user} alt="user"/>
            <h3>Ezzdin Atef</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

 
export default Menu;