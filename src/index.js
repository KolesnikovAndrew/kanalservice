import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker.js";
import configureStore from "./store/index.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
const store = configureStore();
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
