import React from 'react';

const WhatIsNew = () => {
  return (
    <div className="whatisnew">
      <header>
        <h2>What's New?</h2>
      </header>
      <div className="content">
        <div className="version">
          <h4>v1.3.2 <span>(Updated on: 13/11/2020)</span></h4>
          <p>
            <ul>
              <li><span className="feature">Feature</span>Add Statistics Numbers to the Dashboard</li>
              <li><span className="fix">Fix</span>Fix some issues with animation</li>
            </ul>
          </p>
        </div>
        <div className="version">
          <h4>v1.2.2 <span>(Updated on: 9/11/2020)</span></h4>
          <p>
            <ul>
              <li><span className="feature">Feature</span>Add Statistics Numbers to the Dashboard</li>
              <li><span className="feature">Feature</span>Add Config Menu and enable to change color schema</li>
              <li><span className="fix">Fix</span>Isolate the dropdown menu in a component and make it easy to add more !!</li>
              <li><span className="feature">Feature</span>Add Buttons Components Page</li>
            </ul>
          </p>
        </div>
        <div className="version">
          <h4>v1.1.2 <span>(Updated on: 29/10/2020)</span></h4>
          <p>
            <ul>
              <li><span className="fix">Fix</span>Fix the dropdown menu problem</li>
              <li><span className="improve">improve</span>delete the bolits from the list in what's new page</li>
            </ul>
          </p>
        </div>
        <div className="version">
          <h4>v1.1.1 <span>(Updated on: 27/10/2020)</span></h4>
          <p>
            <ul>
              <li><span className="fix">Fix</span>Fix the padding and margin problems</li>
              <li><span className="improve">Improve</span>Add budget to the what's new page</li>
              <li><span className="feature">feature</span>Finish the user settings page</li>
              <li><span className="feature">feature</span>Finish the payment settings page</li>
              <li><span className="improve">improve</span>Connect the settings with redux</li>
              <li><span className="fix">Fix</span>Fix the navigation problem</li>
            </ul>
          </p>
        </div>
        <div className="version">
          <h4>v1.1.0 <span>(Updated on: 23/10/2020)</span></h4>
          <p>
            <ul>
              <li><span className="feature">Feature</span>Add "What's New?" page</li>
              <li><span className="improve">Improve</span>Add The Alter Div in products and wishlist pages</li>
              <li><span className="improve">Improve</span>Make the delete smooth in wishlist and products pages</li>
            </ul>
          </p>
        </div>
        <div className="version">
          <h4>v1.0.0 <span>(Updated on: 21/10/2020)</span></h4>
          <p>
            <ul>
              <li><span className="feature">Feature</span>Finish The Orders Page</li>
              <li><span className="feature">Feature</span>Finish The Products Page</li>
              <li><span className="feature">Feature</span>Finish The WishLlist Page</li>
              <li><span className="feature">Feature</span>Finish The Orders Page</li>
              <li><span className="improve">Improve</span>Finish the implementation of redux with all the finished pages</li>
              <li><span className="improve">Improve</span>make the dropdown and the popups smooth</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatIsNew;