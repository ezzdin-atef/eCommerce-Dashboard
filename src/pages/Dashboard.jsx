import React from 'react';


const Dashboard = () => {
  return (
      <div className="dashboard">
        <div className="stats">
          <div className="stat-block">
            <p>Users</p>
            <h3>1516</h3>
            <span className="icon">
              <i className="fas fa-users"></i>
            </span>
          </div>
          <div className="stat-block">
            <p>Earns</p>
            <h3>$4898</h3>
            <span className="icon">
              <i className="fas fa-dollar-sign"></i>
            </span>
          </div>
          <div className="stat-block">
            <p>Products</p>
            <h3>789</h3>
            <span className="icon">
              <i className="fas fa-box"></i>
            </span>
          </div>
          <div className="stat-block">
            <p>Performance</p>
            <h3>89%</h3>
            <span className="icon">
              <i className="fas fa-percent"></i>
            </span>
          </div>
        </div>
      </div>
  );
}
 
export default Dashboard;