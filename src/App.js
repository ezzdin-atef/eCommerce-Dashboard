import React from 'react';
import Layout from './Layout';
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
        <Layout>
          <Switch>
            <Route path="/orders" component={Orders} /> 
            <Route path="/products" component={Products} /> 
            <Route path="/wishlist" component={Wishlist} /> 
            <Route path="/settings/user" component={User} /> 
            <Route path="/settings/payment" component={Payment} /> 
            <Route exact path="/" component={Dashboard} /> 
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
