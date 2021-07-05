import React from "react";
import { Line } from "react-chartjs-2";
import StatCard from "../components/StatCard";
import Table from "../components/Table";

const Dashboard = () => {
  const data = {
    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "Revenue",
        data: [3550, 10000, 12000, 15500, 11000, 50000, 80000, 30000, 40000, 33000, 55000, 52000],
        backgroundColor: "rgba(66, 95, 128, 1)",
        hoverBackgroundColor: "rgba(66, 95, 128, 0.7)",
        borderColor: "rgb(66, 95, 128)",
        fill: false,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
      position: "right",
    },
    labels: {
      font: {
        family: "Open Sans",
        size: 25,
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="stats">
        <StatCard title="Users" stat="1516" icon={<i className="fas fa-users"></i>} />
        <StatCard title="Earns" stat="$4898" icon={<i className="fas fa-dollar-sign"></i>} />
        <StatCard title="Products" stat="789" icon={<i className="fas fa-box"></i>} />
        <StatCard title="Performance" stat="89%" icon={<i className="fas fa-percent"></i>} />
      </div>

      <div className="dashboard-box chart">
        <h3 className="title">Revenue($)</h3>
        <Line data={data} options={options} height={80} />
      </div>

      <div className="tables">
        <div className="dashboard-box">
          <h3 className="title">Latest Users</h3>
          <Table thead={["#ID", "Name", "Email"]}>
            {users.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
              </tr>
            ))}
          </Table>
        </div>

        <div className="dashboard-box">
          <h3 className="title">Top Sellers</h3>
          <Table thead={["#ID", "Name", "Profits"]}>
            {topUsers.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>${el.profits}</td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const users = [
  {
    id: "116515",
    name: "Mohamed Ahmed",
    email: "mohamed@yahoo.com",
  },
  {
    id: "196515",
    name: "Mohamed Amr",
    email: "mohamed@hotmail.com",
  },
  {
    id: "156515",
    name: "Mahmoud Sobhy",
    email: "sobhy@yahoo.com",
  },
  {
    id: "116989",
    name: "Abdelrahman Ahmed",
    email: "7ema@yahoo.com",
  },
  {
    id: "116566",
    name: "Eslam Mohamed",
    email: "eslam@gmail.com",
  },
];

const topUsers = [
  {
    id: "116515",
    name: "Mohamed Ahmed",
    profits: 5987,
  },
  {
    id: "196515",
    name: "Mohamed Amr",
    profits: 4697,
  },
  {
    id: "156515",
    name: "Mahmoud Sobhy",
    profits: 4569,
  },
  {
    id: "116989",
    name: "Abdelrahman Ahmed",
    profits: 4069,
  },
  {
    id: "116566",
    name: "Eslam Mohamed",
    profits: 3579,
  },
];
