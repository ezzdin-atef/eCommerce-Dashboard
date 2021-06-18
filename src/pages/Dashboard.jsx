import React, { useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

const Dashboard = () => {
  const [data, setData] = useState({
    labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "Users",
        data: [1000, 1500, 1200, 2000, 3000, 3100],
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        hoverBackgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Revnu",
        data: [500, 1500, 3000, 5000, 7000, 100000],
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        hoverBackgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  });

  const [options, setOptions] = useState({
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  });

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

      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
