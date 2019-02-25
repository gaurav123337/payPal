import React from "react";
import ReactDOM from "react-dom";
import {
  Provider
} from "react-redux";
import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import reduxThunk from "redux-thunk";
import "./index.css";
import App from "./App.jsx";
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk)
);

// ReactDOM.render( < Provider store = {
//     store
//   } > < /Provider> < App / >
//   <
//   Provider, document.getElementById("root"));

ReactDOM.render( <
  Provider store = {
    store
  } >
  <
  App / >
  <
  /Provider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
