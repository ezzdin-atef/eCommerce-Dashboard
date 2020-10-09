import React, { useState } from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";
import logo from "../img/logo-mini.png";
import { Flipper, Flipped } from 'react-flip-toolkit'

const Navigation = (props) => {
  const [settings, setSettingDropdown] = useState(false);
  // const settings = React.createRef();
  const dropdown = () => {
    // if (settings.current.classList.contains("open")) {
    //   settings.current.classList.remove("open");
    //   settings.current.classList.add("close");
    // } else {
    //   settings.current.classList.remove("close");
    //   settings.current.classList.add("open");
    // }
    setSettingDropdown(!settings)
  }
  return (
    <nav className="navigation minimal">
      <header>
        <h1><Link to="/"><img src={logo} alt="logo" /> <span>eCommerce</span></Link></h1>
        <span className="collapse"><i className="fas fa-bars"></i></span>
      </header>
      <Flipper flipKey={settings}
        spring="noWobble"
      >
        <ul>
          <li><NavLink exact to="/"><i className="fas fa-tachometer-alt"></i> <span>Dashboard</span></NavLink></li>
          <li><NavLink to="/orders"><i className="fas fa-box"></i> <span>Orders</span></NavLink></li>
          <li><NavLink to="/products"><i className="fas fa-boxes"></i> <span>Products</span></NavLink></li>
          <li><NavLink to="/wishlist"><i className="fas fa-bookmark"></i> <span>Wishlist</span></NavLink></li>
          <Flipped inverseFlipId="dropdown-2">
          <li className={props.match.url.includes("/setting")? "dropdown open" : "dropdown" } onClick={dropdown}><i className="fas fa-cog"></i> <span>Settings</span>
            <Flipped flipId="dropdown-content" 
              // onStart={(el) => {
              //   setTimeout(() => {
              //     el.classList.remove("dropdownClose");
              //     el.classList.add("dropdownOpen");
              //   }, 400);
              // }}
              // onExit={(el) => {
              //   setTimeout(() => {
              //     el.classList.remove("dropdownOpen");
              //     el.classList.add("dropdownClose");
              //   }, 400);
              // }}
            >
              {settings && <ul>
                <li><NavLink to="/setting/user">User</NavLink></li>
                <li><NavLink to="/setting/payment">Payment</NavLink></li>
              </ul>}
            </Flipped>
          </li>
          </Flipped>
          <Flipped flipId="dropdown-1"><li><NavLink to="/temp"><i className="fas fa-bookmark"></i> <span>Temp Link</span></NavLink></li></Flipped>
        </ul>
      </Flipper>
    </nav>
  );
}
 
export default withRouter(Navigation);