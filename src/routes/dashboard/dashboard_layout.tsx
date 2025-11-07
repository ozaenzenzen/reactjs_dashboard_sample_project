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

// src/layouts/DashboardLayout.tsx
export default function DashboardLayout() {
  return (
    <div className="w-full flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-52 bg-gray-100 p-4 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-gray-300 text-gray-900 font-semibold"
                  : "text-gray-600 hover:bg-gray-200"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </aside>

      {/* Main Content */}
      <section className="flex-1 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

// export default function DashboardLayout2() {
//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       {/* ---------- Sidebar ---------- */}
//       <aside
//         style={{
//           width: "200px",
//           background: "#f0f0f0",
//           padding: "15px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//         }}
//       >
//         {navItems.map((item) => (
//           <NavLink
//             key={item.to}
//             to={item.to}
//             end={item.end}
//             style={({ isActive }: { isActive: boolean }) => ({
//               padding: "8px 12px",
//               borderRadius: "4px",
//               background: isActive ? "#e0e0e0" : "transparent",
//               fontWeight: isActive ? "600" : "normal",
//               color: isActive ? "#333" : "#555",
//               textDecoration: "none",
//             })}
//           >
//             {item.label}
//           </NavLink>
//         ))}
//       </aside>

//       {/* ---------- Main Content ---------- */}
//       <section style={{ padding: "20px", flex: 1, background: "#fff" }}>
//         <Outlet />
//       </section>
//     </div>
//   );
// }