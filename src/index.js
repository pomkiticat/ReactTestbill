import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import Car from "./test";
import FuncComp from "./functionComp";
import StateFull from "./stateFull";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Car /> */}
    {/* FuncComp is  used for test functional component */}
    <FuncComp />
    <StateFull />
  </React.StrictMode>,
  rootElement
);
