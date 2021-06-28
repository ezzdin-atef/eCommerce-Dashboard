import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
