import React from 'react';

const WhatIsNew = () => {
  return (
    <div className="whatisnew">
      <header>
        <h2>What's New?</h2>
      </header>
      <div className="content">
        <div className="version">
          <h4>v1.1.0 <span>(Updated on: 23/10/2020)</span></h4>
          <p>
            <ul>
              <li>Add "What's New?" page</li>
              <li>Add The Alter Div in products and wishlist pages</li>
              <li>Make the delete smooth in wishlist and products pages</li>
              <li></li>
            </ul>
          </p>
        </div>
        <div className="version">
          <h4>v1.0.0 <span>(Updated on: 21/10/2020)</span></h4>
          <p>
            <ul>
              <li>Finish The Orders Page</li>
              <li>Finish The Products Page</li>
              <li>Finish The WishLlist Page</li>
              <li>Finish The Orders Page</li>
              <li>Finish the implementation of redux with all the finished pages</li>
              <li>make the dropdown and the popups smooth</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatIsNew;