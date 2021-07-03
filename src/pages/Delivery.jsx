import React, { useState, useEffect } from "react";
import Table from "../components/Table";

export default function Delivery() {
  const [delivery, setDelivery] = useState([
    {
      id: Math.random() * 100000,
      name: "TP-Link Router",
      buyer: "Eslam Mohamed",
      status: "Shipped",
    },
    {
      id: Math.random() * 100000,
      name: "TP-Link Router",
      buyer: "Mahmoud Sobhy",
      status: "Delivered",
    },
    {
      id: Math.random() * 100000,
      name: "TP-Link Router",
      buyer: "Ahmed Abo Bakr",
      status: "Arrived",
    },
    {
      id: Math.random() * 100000,
      name: "TP-Link Router",
      buyer: "Eslam Mohamed",
      status: "Shipped",
    },
    {
      id: Math.random() * 100000,
      name: "TP-Link Router",
      buyer: "LOL",
      status: null,
    },
  ]);

  const handleStatusChange = (id, currentStatus) => {
    const index = delivery.findIndex((el) => el.id === id);
    const tmpDelivery = [...delivery];
    if (currentStatus === null) {
      tmpDelivery[index].status = "Shipped";
    } else if (currentStatus === "Shipped") {
      tmpDelivery[index].status = "Arrived";
    } else if (currentStatus === "Arrived") {
      tmpDelivery[index].status = "Delivered";
    }

    setDelivery(tmpDelivery);
  };

  useEffect(() => {
    console.log(delivery);
  }, [delivery]);

  const statuses = ["Shipped", "Arrived", "Delivered"];
  return (
    <div className="delivery">
      <header>
        <h2 className="table-heading">Your Products Orders</h2>
      </header>
      <Table thead={["#ID", "Name", "Buyer", "Current Status", ""]}>
        {delivery.map((el) => (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.buyer}</td>
            <td>{el.status}</td>
            <td>
              {el.status !== "Delivered" && (
                <button className="btn btn-sm btn-warning" onClick={() => handleStatusChange(el.id, el.status)}>
                  {statuses[statuses.findIndex((s) => s === el.status) + 1]}
                </button>
              )}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
