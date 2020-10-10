import React from 'react';
import logo from "../img/logo-mini.png";
import user from "../img/user.jpeg";
import Dropdown from './Dropdown';

const Menu = () => {
  return (
    <div className="menu">
      <img src={logo} alt="logo" />
      <ul className="list">
        <Dropdown title={<i className="fas fa-shopping-cart"></i>} span={<span>3</span>} items={["Item 1", "Item 2", "Item 3"]} />
        <Dropdown title={<i className="fas fa-bell"></i>} items={["Item 1", "Item 2", "Item 3"]} />
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