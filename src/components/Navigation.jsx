import React, { useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import logo from "../img/logo-mini.png";
import { Flipper, Flipped } from "react-flip-toolkit";
import Dropdown from "./Dropdown";

const Navigation = (props) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  // Handle Collapse
  const handleCollapse = (e) => {
    console.log();
    e.target.parentNode.parentNode.parentNode.classList.toggle("minimal");
  };

  const dropdownSatusChange = () => {
    setDropdownStatus(!dropdownStatus);
  };

  return (
    <nav className="navigation">
      <header>
        <h1>
          <Link to="/">
            <img src={logo} alt="logo" /> <span>eCommerce</span>
          </Link>
        </h1>
        <span className="collapse fas fa-bars" onClick={handleCollapse}></span>
      </header>
      <Flipper flipKey={dropdownStatus} spring="noWobble">
        <ul>
          <li>
            <NavLink exact to="/">
              <i className="fas fa-tachometer-alt"></i> <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders">
              <i className="fas fa-box"></i> <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <i className="fas fa-boxes"></i> <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">
              <i className="fas fa-bookmark"></i> <span>Wishlist</span>
            </NavLink>
          </li>
          <Dropdown
            title="Components"
            icon={<i className="fas fa-cube"></i>}
            link="/components"
            subMenu={{ Buttons: "/buttons", Badges: "/badges" }}
            dropdownSatusChange={dropdownSatusChange}
            {...props}
          />
          <Dropdown
            title="Settings"
            icon={<i className="fas fa-cog"></i>}
            link="/settings"
            subMenu={{ User: "/user", Payment: "/payment" }}
            dropdownSatusChange={dropdownSatusChange}
            {...props}
          />
          <Flipped flipId="15156">
            <li>
              <NavLink to="/whatisnew">
                <i className="fas fa-file-alt"></i> <span>What's New ?</span>
              </NavLink>
            </li>
          </Flipped>
        </ul>
      </Flipper>
    </nav>
  );
};

export default withRouter(Navigation);
