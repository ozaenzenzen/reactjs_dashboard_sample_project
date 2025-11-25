// src/layouts/DashboardLayout.tsx
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu, Bell, Search, User, LogOut, Settings } from "lucide-react"; // optional: lucide icons
import { useNavigate } from "react-router-dom";
import AppHeader from "./AppHeader";
import Header from "./Header";
import HeaderV2 from "./Header";

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
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Dashboard
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 pb-4">
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
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-purple-600 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Optional: User at bottom (like in screenshot) */}
        <div className="p-4 border-t border-gray-200">
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
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Anita Cruz
                  </p>
                  <p className="text-xs text-gray-500">anita@commerce.com</p>
                </div>
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

      {/* Main Layout */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <HeaderV2></HeaderV2>

        {/* Page Content */}
        <main className="mt-16 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );

  return (
    <div className="w-full flex min-h-screen">
      {/* Header - Fixed at the top */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          {/* Mobile menu button (visible on small screens) */}
          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="w-5 h-5 text-gray-500" />
          </button>

          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <span className="font-semibold text-xl hidden sm:block text-gray-500">
              Dashboard
            </span>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Search - optional */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm flex-1 text-gray-400"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                JD
              </div>
              <span className="hidden md:block text-sm font-medium text-gray-500">
                John Doe
              </span>
            </button>

            {/* Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                <a
                  href="/dashboard/profile"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm"
                >
                  <User className="w-4 h-4" />
                  Profile
                </a>
                <a
                  href="/dashboard/settings"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </a>
                <hr className="my-2" />
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-sm text-red-600 w-full text-left"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar - Fixed on large screens */}
      <aside className="fixed left-0 top-16 bottom-0 w-52 bg-gray-100 p-4 flex flex-col gap-2 overflow-y-auto border-r border-gray-200">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-gray-300 text-gray-900 font-semibold shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </aside>

      {/* Main Content - Adjusted for fixed header & sidebar */}
      <section className="flex-1 ml-52 mt-16 bg-gray-50 min-h-screen">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </section>
    </div>
  );
  return (
    <div className="w-full flex min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-50 z-50 flex items-center justify-between px-4 lg:px-6">
        <div></div>
      </header>
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
