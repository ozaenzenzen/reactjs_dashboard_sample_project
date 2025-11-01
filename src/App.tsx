import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import DashboardLayout from "./routes/dashboard/dashboard_layout"
import RootLayout from "./routes/layout"
import DashboardPage from "./routes/dashboard/DashboardPage"
import RegisterPage from "./routes/register/RegisterPage"
import LoginPage from "./routes/login/LoginPage"
import NotFoundPage from "./routes/NotFoundPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            { index: true, element: <DashboardPage /> },
            {
              path: "analytics",
              element: <h1 className="title">Analytics</h1>,
            },
            { path: "reports", element: <h1 className="title">Reports</h1> },
            {
              path: "customers",
              element: <h1 className="title">Customers</h1>,
            },
            {
              path: "new-customer",
              element: <h1 className="title">New Customer</h1>,
            },
            {
              path: "verified-customers",
              element: <h1 className="title">Verified Customers</h1>,
            },
            { path: "products", element: <h1 className="title">Products</h1> },
            {
              path: "new-product",
              element: <h1 className="title">New Product</h1>,
            },
            {
              path: "inventory",
              element: <h1 className="title">Inventory</h1>,
            },
            { path: "settings", element: <h1 className="title">Settings</h1> },
          ],
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return (
      <RouterProvider router={router}/>
  )
}

export default App;
