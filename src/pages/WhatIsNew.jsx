import React from 'react';
import Version from "../components/Version";

const WhatIsNew = () => {
  const features = [
    {
      version: "2.0.0",
      date: "",
      data: [
        {
          type: "improve",
          item: "The animation exit"
        }
      ]
    },
    {
      version: "1.3.2",
      date: "13/11/2020",
      data: [
        {
          type: "feature",
          item: "Add Statistics Numbers to the Dashboard"
        },
        {
          type: "fix",
          item: "Fix some issues with animation"
        }
      ]
    },
    {
      version: "1.2.2",
      date: "9/11/2020",
      data: [
        {
          type: "feature",
          item: "Add Statistics Numbers to the Dashboard"
        },
        {
          type: "feature",
          item: "Add Config Menu and enable to change color schema"
        },
        {
          type: "fix",
          item: "Isolate the dropdown menu in a component and make it easy to add more !!"
        },
        {
          type: "feature",
          item: "Add Buttons Components Page"
        }
      ]
    },
    {
      version: "1.1.2",
      date: "29/10/2020",
      data: [
        {
          type: "fix",
          item: "Fix the dropdown menu problem"
        },
        {
          type: "improve",
          item: "Delete the bolits from the list in what's new page"
        }
      ]
    },
    {
      version: "1.1.1",
      date: "27/10/2020",
      data: [
        {
          type: "fix",
          item: "Fix the padding and margin problems"
        },
        {
          type: "improve",
          item: "Add budget to the what's new page"
        },
        {
          type: "feature",
          item: "Finish the user settings page"
        },
        {
          type: "feature",
          item: "Finish the payment settings page"
        },
        {
          type: "improve",
          item: "Connect the settings with redux"
        },
        {
          type: "fix",
          item: "Fix the navigation problem"
        }
      ]
    },
    {
      version: "1.1.0",
      date: "23/10/2020",
      data: [
        {
          type: "feature",
          item: "Add \"What's New?\" page"
        },
        {
          type: "improve",
          item: "Add The Alter Div in products and wishlist pages"
        },
        {
          type: "improve",
          item: "Make the delete smooth in wishlist and products pages"
        }
      ]
    },
    {
      version: "1.0.0",
      date: "21/10/2020",
      data: [
        {
          type: "feature",
          item: "Finish The Orders Page"
        },
        {
          type: "feature",
          item: "Finish The Products Page"
        },
        {
          type: "feature",
          item: "Finish The WishLlist Page"
        },
        {
          type: "improve",
          item: "Finish the implementation of redux with all the finished pages"
        },
        {
          type: "improve",
          item: "Make the dropdown and the popups smooth"
        }
      ]
    }
  ]
  return (
    <div className="whatisnew">
      <header>
        <h2>What's New?</h2>
      </header>
      <div className="content">
        {features.map(el => <Version version={el.version} date={el.date} features={el.data} />)}
      </div>
    </div>
  );
}

export default WhatIsNew;