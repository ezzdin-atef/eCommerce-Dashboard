import React from 'react';
import { connect } from "react-redux";
import logo from "../img/logo-mini.png";
import Notifications from './Notifications';
import ShoppingCart from './ShoppingCart';

const Menu = props => {
  return (
    <div className="menu">
      <img src={logo} alt="logo" />
      <ul className="list">
        <ShoppingCart />
        <Notifications />
        <li>
          <div className="user">
            <img src={props.user.image} alt={props.user.username} />
            <h3>{props.user.name}</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Menu);