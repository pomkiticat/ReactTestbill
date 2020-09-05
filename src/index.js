import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import LoginControl from "./LoginLogout";
// import Car from "./test";
// import FuncComp from "./functionComp";
// import StateFull from "./stateFull";
import FectchRest from "./FetchRest";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Car /> */}
    {/* FuncComp is  used for test functional component */}
    {/* <FuncComp />
    <StateFull /> */}
    {/* <LoginControl /> */}
    <FectchRest />
  </React.StrictMode>,
  rootElement
);
