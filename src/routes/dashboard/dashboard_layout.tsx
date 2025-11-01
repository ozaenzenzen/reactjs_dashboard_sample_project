import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <aside
        style={{
          width: "200px",
          background: "#f0f0f0",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Link to="/dashboard">Overview</Link>
        <Link to="/dashboard/analytics">Analytics</Link>
        <Link to="/dashboard/reports">Reports</Link>
        <Link to="/dashboard/customers">Customers</Link>
        <Link to="/dashboard/new-customer">New Customer</Link>
        <Link to="/dashboard/verified-customers">Verified Customers</Link>
        <Link to="/dashboard/products">Products</Link>
        <Link to="/dashboard/new-product">New Product</Link>
        <Link to="/dashboard/inventory">Inventory</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </aside>

      <section style={{ padding: "20px", flex: 1 }}>
        <Outlet />
      </section>
    </div>
  );
}

export default DashboardLayout;