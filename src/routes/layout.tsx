import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header style={{ padding: "10px", background: "#282c34" }}>
        <nav style={{ display: "flex", gap: "15px" }}>
          <Link to="/" style={{ color: "#fff" }}>Home</Link>
          <Link to="/login" style={{ color: "#fff" }}>Login</Link>
          <Link to="/register" style={{ color: "#fff" }}>Register</Link>
          <Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link>
        </nav>
      </header>
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;