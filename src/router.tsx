import { redirect, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/layout";
import DashboardLayout from "./routes/dashboard/dashboard_layout";

import DashboardPage, {
  dashboardLoader,
} from "./routes/dashboard/DashboardPage";
import RegisterPage, { registerAction } from "./routes/register/RegisterPage";
import LoginPage from "./routes/login/LoginPage";
// import LoginPage, { loginAction } from "./routes/login/LoginPage";
import { loginAction } from "./routes/login/support/login_action";
import NotFoundPage from "./routes/NotFoundPage";

// Fake auth
const getAuth = () => localStorage.getItem("isLoggedIn") === "true";

const requireAuth = async () => {
  if (!getAuth())
    throw redirect("/login?redirect=" + encodeURIComponent(location.pathname));
  return null;
};

const requireGuest = async () => {
  if (getAuth()) throw redirect("/dashboard");
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, loader: requireGuest, element: <LoginPage /> },
      {
        path: "login",
        element: <LoginPage />,
        loader: requireGuest,
        action: loginAction,
      },
      {
        path: "register",
        element: <RegisterPage />,
        loader: requireGuest,
        action: registerAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: requireAuth,
        children: [
          {
            index: true,
            element: <DashboardPage />,
            loader: dashboardLoader,
          },
          { path: "analytics", element: <h1 className="title">Analytics</h1> },
          { path: "reports", element: <h1 className="title">Reports</h1> },
          { path: "customers", element: <h1 className="title">Customers</h1> },
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
          { path: "inventory", element: <h1 className="title">Inventory</h1> },
          { path: "settings", element: <h1 className="title">Settings</h1> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { index: true, element: <DashboardPage /> },
      { index: true, element: <h1 className="title">Analytics</h1> },
      { path: "analytics", element: <h1 className="title">Analytics</h1> },
      { path: "reports", element: <h1 className="title">Reports</h1> },
      { path: "customers", element: <h1 className="title">Customers</h1> },
      {
        path: "new-customer",
        element: <h1 className="title">New Customer</h1>,
      },
      {
        path: "verified-customers",
        element: <h1 className="title">Verified Customers</h1>,
      },
      { path: "products", element: <h1 className="title">Products</h1> },
      { path: "new-product", element: <h1 className="title">New Product</h1> },
      { path: "inventory", element: <h1 className="title">Inventory</h1> },
      { path: "settings", element: <h1 className="title">Settings</h1> },
    ],
  },
]);

export default router;
