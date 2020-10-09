import React from 'react';
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Products from "./Products";
import Wishlist from "./Wishlist";
import User from "./User";
import Payment from "./Payment";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/orders" component={Orders} /> 
          <Route path="/products" component={Products} /> 
          <Route path="/wishlist" component={Wishlist} /> 
          <Route path="/setting/user" component={User} /> 
          <Route path="/setting/payment" component={Payment} /> 
          <Route exact path="/" component={Dashboard} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
