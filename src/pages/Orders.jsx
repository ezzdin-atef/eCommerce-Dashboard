import React from 'react';
import { connect } from 'react-redux';
import RatePopup from "../components/popups/RatePopup";

const Orders = props => {

  const displayStars = (rate) => {
    let stars = [];
    for (let i = 1; i <= rate; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    for (let i = rate; i < 5; i++) {
      stars.push(<i key={i+1} className="far fa-star"></i>);
    }
    return stars;
  }

  return (
    <div className="orders">
      <header>
        <h2>Your Orders</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Shipped By</th>
            <th>Condition</th>
            <th>Status</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {props.orders.map(el => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.title}</td>
              <td>{el.by}</td>
              <td>{el.condition}</td>
              <td className={el.status.toLowerCase()}><span>{el.status}</span></td>
              <td className="rate">
                {
                  (el.status.toLowerCase() === "delivered") && (el.rate? displayStars(el.rate) : (<RatePopup id={el.id} title={el.title} />))
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
const mapStateToProps = (state) => {
  return {
    orders: state.orders
  };
}

export default connect(mapStateToProps)(Orders);