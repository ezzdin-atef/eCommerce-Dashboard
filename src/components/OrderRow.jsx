import React, { useState } from 'react';
import { useEffect } from 'react';

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
  }, []);
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.by}</td>
      <td>{props.condition}</td>
      <td className={props.status.toLowerCase()}><span>{props.status}</span></td>
      <td className="rate">
        {
          (props.status.toLowerCase() === "delivered") && (props.rate? stars : (<a href="#">Rate The Product</a>))
        }
      </td>
    </tr>
  );
}

export default OrderRow;