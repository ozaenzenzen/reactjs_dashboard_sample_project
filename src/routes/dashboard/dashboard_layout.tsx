// src/layouts/DashboardLayout.tsx
import { NavLink, Outlet } from "react-router-dom";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const navItems: readonly NavItem[] = [
  { to: "/dashboard", label: "Overview", end: true },
  { to: "/dashboard/analytics", label: "Analytics" },
  { to: "/dashboard/reports", label: "Reports" },
  { to: "/dashboard/customers", label: "Customers" },
  { to: "/dashboard/new-customer", label: "New Customer" },
  { to: "/dashboard/verified-customers", label: "Verified Customers" },
  { to: "/dashboard/products", label: "Products" },
  { to: "/dashboard/new-product", label: "New Product" },
  { to: "/dashboard/inventory", label: "Inventory" },
  { to: "/dashboard/settings", label: "Settings" },
] as const;

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* ---------- Sidebar ---------- */}
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
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            style={({ isActive }: { isActive: boolean }) => ({
              padding: "8px 12px",
              borderRadius: "4px",
              background: isActive ? "#e0e0e0" : "transparent",
              fontWeight: isActive ? "600" : "normal",
              color: isActive ? "#333" : "#555",
              textDecoration: "none",
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </aside>

      {/* ---------- Main Content ---------- */}
      <section style={{ padding: "20px", flex: 1, background: "#fff" }}>
        <Outlet />
      </section>
    </div>
  );
}