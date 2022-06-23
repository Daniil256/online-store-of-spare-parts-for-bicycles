import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { rootReducer } from "./redux/rootReducer";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { logger } from "./middleWare/logger";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
