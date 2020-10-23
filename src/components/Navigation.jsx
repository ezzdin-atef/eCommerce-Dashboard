import React, { useEffect, useState } from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";
import logo from "../img/logo-mini.png";
import { Flipper, Flipped } from 'react-flip-toolkit';

const Navigation = (props) => {
  const [settings, setSettingDropdown] = useState(false);
  const settingsIcon = React.createRef();
  
  // Handle Dropdown Settings
  const dropdown = (e) => {
    if (e.target.tagName !== "A" ||  e.target.href.endsWith("/")) {
      settingsIcon.current.classList.toggle("open");
      setSettingDropdown(!settings);
    }
  }

  // Handle Collapse
  const handleCollapse = (e) => {
    console.log();
    e.target.parentNode.parentNode.parentNode.classList.toggle("minimal");
  }

  useEffect(() => {
    if (props.location.pathname.includes("/settings")) {
      setSettingDropdown(true);
    } else {
      setSettingDropdown(false);
      settingsIcon.current.classList.remove("open");
    }
    // eslint-disable-next-line
  }, [props.location.pathname]);

  return (
    <nav className="navigation">
      <header>
        <h1><Link to="/"><img src={logo} alt="logo" /> <span>eCommerce</span></Link></h1>
        <span className="collapse fas fa-bars" onClick={handleCollapse}></span>
      </header>
      <Flipper flipKey={settings} spring="noWobble">
        <ul>
          <li><NavLink exact to="/"><i className="fas fa-tachometer-alt"></i> <span>Dashboard</span></NavLink></li>
          <li><NavLink to="/orders"><i className="fas fa-box"></i> <span>Orders</span></NavLink></li>
          <li><NavLink to="/products"><i className="fas fa-boxes"></i> <span>Products</span></NavLink></li>
          <li><NavLink to="/wishlist"><i className="fas fa-bookmark"></i> <span>Wishlist</span></NavLink></li>
          <Flipped inverseFlipId="dropdown-2">
          <li className={props.location.pathname.includes("/settings")? "dropdown open" : "dropdown" } onClick={dropdown} ref={settingsIcon}><Link to="/" className={props.location.pathname.includes("/settings")? "active" : ""} onClick={(e) => e.preventDefault()}><i className="fas fa-cog"></i> <span>Settings</span></Link>
            <Flipped flipId="dropdown-content">
              <>
              {settings && <ul>
                <li><NavLink to="/settings/user">User</NavLink></li>
                <li><NavLink to="/settings/payment">Payment</NavLink></li>
              </ul>}
              </>
            </Flipped>
          </li>
          </Flipped>
          <Flipped flipId="dropdown-1"><li><NavLink to="/whatisnew"><i className="fas fa-file-alt"></i> <span>What's New ?</span></NavLink></li></Flipped>
        </ul>
      </Flipper>
    </nav>
  );
}
 
export default withRouter(Navigation);