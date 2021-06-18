import React from "react";

const BadgesPage = () => {
  return (
    <div className="components">
      <header>
        <h2>Badges</h2>
      </header>
      <div className="content">
        <div className="components-section">
          <h1>
            This Black Badge <span className="badge badge-dark">Badge</span>
          </h1>
          <h2>
            This Blue Badge <span className="badge badge-blue">Badge</span>
          </h2>
          <h3>
            This Green Badge <span className="badge badge-green">Badge</span>
          </h3>
          <h4>
            This Yellow Badge <span className="badge badge-yellow">Badge</span>
          </h4>
          <h5>
            This Red Badge <span className="badge badge-red">Badge</span>
          </h5>
          <h6>
            This Orange Badge <span className="badge badge-orange">Badge</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default BadgesPage;
