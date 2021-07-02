import React from "react";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";

const Layout = (props) => {
  const menu = [
    {
      name: "Dashboard",
      icon: <i className="fas fa-tachometer-alt"></i>,
      link: "/",
      submenu: null,
    },
    {
      name: "Orders",
      icon: <i className="fas fa-box"></i>,
      link: "/orders",
      submenu: null,
    },
    {
      name: "Products",
      icon: <i className="fas fa-boxes"></i>,
      link: "/products",
      submenu: null,
    },
    {
      name: "Wishlist",
      icon: <i className="fas fa-bookmark"></i>,
      link: "/wishlist",
      submenu: null,
    },
    {
      name: "Components",
      icon: <i className="fas fa-cube"></i>,
      link: "/components",
      submenu: [
        {
          name: "Buttons",
          link: "/buttons",
        },
        {
          name: "Badges",
          link: "/badges",
        },
      ],
    },
    {
      name: "Settings",
      icon: <i className="fas fa-cog"></i>,
      link: "/settings",
      submenu: [
        {
          name: "User",
          link: "/user",
        },
        {
          name: "Payment",
          link: "/payment",
        },
      ],
    },
    {
      name: "What's New ?",
      icon: <i className="fas fa-file-alt"></i>,
      link: "/whatisnew",
      submenu: null,
    },
  ];
  return (
    <div className="wrapper">
      <Navigation menu={menu} />
      <main>
        <Menu />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
