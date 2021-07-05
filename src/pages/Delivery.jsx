import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/delivery";
import Table from "../components/Table";

export default function Delivery() {
  const delivery = useSelector((state) => state.delivery.value);
  const dispatch = useDispatch();

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
            <td>
              <span className={"badge badge-" + el.status?.toLowerCase()}>{el.status}</span>
            </td>
            <td>
              {el.status !== "Delivered" && (
                <button className="btn btn-sm btn-primary-light" onClick={() => dispatch(update(el.id))}>
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
