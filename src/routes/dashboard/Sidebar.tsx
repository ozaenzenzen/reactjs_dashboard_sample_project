// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom";

type NavItem = { to: string; label: string; end?: boolean };

interface SidebarProps {
  items: NavItem[];
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
      </div>
      <nav className="mt-6">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={`/dashboard/${item.to}`}
            end={item.end}
            className={({ isActive }) =>
              `block px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-700 border-r-4 border-indigo-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}