import React, { useState, useEffect } from 'react';
import RatePopup from "../components/RatePopup";

const OrderRow = (props) => {
  let [stars, setStars] = useState([]);
  
  useEffect(() => {
    let st = [];
    for (let i = 1; i <= props.rate; i++) {
      st.push(<i key={i} className="fas fa-star"></i>);
    }
    for (let i = props.rate; i < 5; i++) {
      st.push(<i key={i+1} className="far fa-star"></i>);
    }
    setStars(st);
  }, [props.rate]);

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.by}</td>
      <td>{props.condition}</td>
      <td className={props.status.toLowerCase()}><span>{props.status}</span></td>
      <td className="rate">
        {
          (props.status.toLowerCase() === "delivered") && (props.rate? stars : (<RatePopup title={props.name} />))
        }
      </td>
    </tr>
  );
}

export default OrderRow;