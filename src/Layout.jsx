import React from 'react';
import Navigation from './components/Navigation';
import Menu from './components/Menu';

const Layout = (props) => {
  return (
    <div className="wrapper">
      <Navigation />
      <main>
        <Menu />
        {props.children}
      </main>
    </div>
  );
}
 
export default Layout;