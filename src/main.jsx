import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router.jsx";
import "./styles.css";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
