import React, { useState } from 'react';
import { Bar, Line, Pie, Doughnut  } from 'react-chartjs-2';

const Dashboard = () => {
  const [data, setData] = useState({
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [{
        data: [7616, 2321, 1558, 5454, 6564, 9456],
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        hoverBackgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1, 
    }],
  });
  const [options, setOptions] = useState({
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: true,
        ticks: {
          fontColor: 'rgba(255, 255, 255, 0.8)'
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontColor: 'rgba(255, 255, 255, 0.8)'
        }
      }]
    },
    layout: {
      padding: {
        top: 20,
        left: 15,
        right: 15,
        bottom: 10
      }
    }
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
        <div className="charts">
          <div>
            <Bar data={data} options={options} />
            <h3>Website Views</h3>
          </div>
          <div>
            <Line data={data} options={options} />
            <h3>Website Earns</h3>
          </div>
          <div>
            <Line data={data} options={options} />
            <h3>Website New Users</h3>
          </div>  
        </div>
      </div>
  );
}
 
export default Dashboard;