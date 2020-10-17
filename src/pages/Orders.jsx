import React from 'react';
import OrderRow from '../components/OrderRow';

const Orders = () => {
  return (
    <div className="orders">
      <h2>Your Orders</h2>
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Shipped By</th>
            <th>Condition</th>
            <th>Status</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <OrderRow id="1215" name="TP-Link Router" by="Souq" condition="New" status="Shipped" rate="" />
          <OrderRow id="1215" name="Head First Java" by="Amazon" condition="New" status="Arrived" rate="" />
          <OrderRow id="1215" name="Cracking the Coding Interview" by="Laakmann McDowell" condition="Used" status="Delivered" rate="" />
          <OrderRow id="1215" name="Eloquent JavaScript" by="Marijn Haverbeke" condition="New" status="Delivered" rate="4" />
        </tbody>
      </table>
    </div>
  );
}
 
export default Orders;