import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

export default router;
