import React, { useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Flipper, Flipped } from "react-flip-toolkit";
import Dropdown from "./Dropdown";

/*
 * Navigation Component to view navigation sidebar
 * @props
 * menu: array of objects [{name, icon, link, submenu}]
 * sitename: string
 * sitelogo: IMAGE
 */

const Navigation = (props) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const dropdownSatusChange = () => {
    setDropdownStatus(!dropdownStatus);
  };

  return (
    <nav className="navigation">
      <header>
        <h1>
          <Link to="/">
            {/* <img src={logo} alt="logo" /> <span>eCommerce</span> */}e<span>Commerce Dashboard</span>
          </Link>
        </h1>
      </header>
      <Flipper flipKey={dropdownStatus} spring="noWobble">
        <ul>
          {props.menu.map((el) => {
            if (el.submenu) {
              return (
                <Dropdown
                  key={el.link}
                  title={el.name}
                  icon={el.icon}
                  link={el.link}
                  submenu={el.submenu}
                  dropdownSatusChange={dropdownSatusChange}
                  {...props}
                />
              );
            } else {
              return (
                <Flipped flipId={el.link} translate key={el.link}>
                  <li>
                    <NavLink exact to={el.link}>
                      {el.icon} <span>{el.name}</span>
                    </NavLink>
                  </li>
                </Flipped>
              );
            }
          })}
        </ul>
      </Flipper>
    </nav>
  );
};

export default withRouter(Navigation);
