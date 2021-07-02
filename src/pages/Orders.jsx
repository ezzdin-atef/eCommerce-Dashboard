import React from "react";
import { useSelector } from "react-redux";
import RatePopup from "../components/modals/RatePopup";
import Table from "../components/Table";

const Orders = () => {
  const orders = useSelector((state) => state.orders.value);

  const displayStars = (rate) => {
    let stars = [];
    for (let i = 1; i <= rate; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    for (let i = rate + 1; i <= 5; i++) {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
    return stars;
  };

  return (
    <div className="orders">
      <header>
        <h2 className="table-heading">Your Orders</h2>
      </header>
      <Table thead={["#ID", "Name", "Shipped By", "Condition", "Status", "Rate"]}>
        {orders.map((el) => (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td>{el.by}</td>
            <td>{el.condition}</td>
            <td>
              <span className={"badge badge-" + el.status.toLowerCase()}>{el.status}</span>
            </td>
            <td className="rate">
              {el.status.toLowerCase() === "delivered" &&
                (el.rate ? displayStars(parseInt(el.rate, 10)) : <RatePopup id={el.id} title={el.title} />)}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Orders;
