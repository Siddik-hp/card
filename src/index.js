import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
require("./scss/main.css");
// importing react-router-dom
// ..

AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
