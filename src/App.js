import React from 'react';
import Layout from './Layout';
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import WhatIsNew from "./pages/WhatIsNew";
import User from "./pages/User";
import Payment from "./pages/Payment";
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Layout>
            <ToastContainer className="toastify" />
            <Switch>
              <Route path="/orders" component={Orders} /> 
              <Route path="/products" component={Products} /> 
              <Route path="/wishlist" component={Wishlist} /> 
              <Route path="/whatisnew" component={WhatIsNew} /> 
              <Route path="/settings/user" component={User} /> 
              <Route path="/settings/payment" component={Payment} /> 
              <Route exact path="/" component={Dashboard} /> 
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
