import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./body.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  devTools: true, //TODO false pour la prod
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
