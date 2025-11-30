// src/components/Sidebar.tsx
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  Bell,
  Search,
  User,
  LogOut,
  Settings,
  ChartBar,
  ChartArea,
  ReceiptPoundSterling,
  PersonStanding,
  BoxIcon,
  Settings2,
} from "lucide-react"; // optional: lucide icons

type NavItem = {
  icon: React.ReactNode;
  to: string;
  label: string;
  end?: boolean;
  subItems?: { to: string; label: string; end?: boolean }[];
};

const navItems: NavItem[] = [
  { icon: <ChartBar />, to: "/dashboard", label: "Overview", end: true },
  { icon: <ChartArea />, to: "/dashboard/analytics", label: "Analytics" },
  {
    icon: <ReceiptPoundSterling />,
    to: "/dashboard/reports",
    label: "Reports",
  },
  { icon: <PersonStanding />, to: "/dashboard/customers", label: "Customers" },
  {
    icon: <PersonStanding />,
    to: "/dashboard/new-customer",
    label: "New Customer",
  },
  {
    icon: <PersonStanding />,
    to: "/dashboard/verified-customers",
    label: "Verified Customers",
  },
  { icon: <BoxIcon />, to: "/dashboard/products", label: "Products" },
  { icon: <BoxIcon />, to: "/dashboard/new-product", label: "New Product" },
  { icon: <BoxIcon />, to: "/dashboard/inventory", label: "Inventory" },
  {
    icon: <Settings2 />,
    to: "/dashboard/event-management",
    label: "Event Management",
    subItems: [
      {to: "/dashboard/event-management/configuration", label: "Configuration"},
      {to: "/dashboard/event-management/category", label: "Category"},
      {to: "/dashboard/event-management/publish", label: "Publish"},
      {to: "/dashboard/event-management/report", label: "Report"},
      {to: "/dashboard/event-management/live", label: "Live"},
    ],
  },
  {
    icon: <Settings2 />,
    to: "/dashboard/user-management",
    label: "User Management",
    subItems: [
      {to: "/dashboard/user-management/user", label: "User"},
      {to: "/dashboard/user-management/role", label: "Role"},
    ],
  },
  { icon: <Settings2 />, to: "/dashboard/settings", label: "Settings" },
] as const;

// const navItems: readonly NavItem[] = [
//   { icon: <ChartBar />, to: "/dashboard", label: "Overview", end: true },
//   { icon: <ChartArea />, to: "/dashboard/analytics", label: "Analytics" },
//   {
//     icon: <ReceiptPoundSterling />,
//     to: "/dashboard/reports",
//     label: "Reports",
//   },
//   { icon: <PersonStanding />, to: "/dashboard/customers", label: "Customers" },
//   {
//     icon: <PersonStanding />,
//     to: "/dashboard/new-customer",
//     label: "New Customer",
//   },
//   {
//     icon: <PersonStanding />,
//     to: "/dashboard/verified-customers",
//     label: "Verified Customers",
//   },
//   { icon: <BoxIcon />, to: "/dashboard/products", label: "Products" },
//   { icon: <BoxIcon />, to: "/dashboard/new-product", label: "New Product" },
//   { icon: <BoxIcon />, to: "/dashboard/inventory", label: "Inventory" },
//   { icon: <Settings2 />, to: "/dashboard/settings", label: "Settings" },
// ] as const;

type Props = {
  collapsed: boolean;
};

export default function Sidebar({ collapsed }: Props) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 bg-white border-r border-gray-200 flex flex-col ${
        collapsed ? "w-24" : "w-64"
      }`}
    >
      <div className="p-6 shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-2xl font-bold">E</span>
          </div>
          {!collapsed && (
            <span className="text-xl font-semibold text-gray-900">
              Event Management Sports
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 px-4 py-3 my-1 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-purple-50 text-purple-700 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Active indicator bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded-r-full" />
                  )}
                  {item.icon}
                  {!collapsed && <span>{item.label}</span>}
                  {isActive && !collapsed && (
                    <div className="ml-auto w-2 h-2 bg-purple-600 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Optional: User at bottom (like in screenshot) */}
      <div className="border-t border-gray-200">
        <div className="relative">
          {/* Menu User */}
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                AC
              </div>
              {!collapsed && (
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Anita Cruz
                  </p>
                  <p className="text-xs text-gray-500">anita@commerce.com</p>
                </div>
              )}
            </div>
          </button>

          {/* Dropdown */}
          {showUserMenu && (
            <div className="absolute left-full bottom-0 ml-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <a
                href="/dashboard/profile"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
              >
                <User className="w-4 h-4" />
                My Profile
              </a>
              <a
                href="/dashboard/settings"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
              >
                <Settings className="w-4 h-4" />
                Settings
              </a>
              <hr className="my-2 border-gray-200" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}

          {/* Overlay to close dropdown when clicking outside */}
          {showUserMenu && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowUserMenu(false)}
            />
          )}
        </div>
      </div>
    </aside>
  );
}

// type NavItem = { to: string; label: string; end?: boolean };

// interface SidebarProps {
//   items: NavItem[];
// }

// export default function Sidebar({ items }: SidebarProps) {
//   return (
//     <aside className="w-64 bg-white shadow-md">
//       <div className="p-6">
//         <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
//       </div>
//       <nav className="mt-6">
//         {items.map((item) => (
//           <NavLink
//             key={item.to}
//             to={`/dashboard/${item.to}`}
//             end={item.end}
//             className={({ isActive }) =>
//               `block px-6 py-3 text-sm font-medium transition-colors ${
//                 isActive
//                   ? "bg-indigo-50 text-indigo-700 border-r-4 border-indigo-600"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`
//             }
//           >
//             {item.label}
//           </NavLink>
//         ))}
//       </nav>
//     </aside>
//   );
// }
