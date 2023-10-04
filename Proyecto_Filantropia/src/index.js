import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/home-main.css";
import "./styles/style.css";
import { RouterProvider } from "react-router-dom/dist";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
