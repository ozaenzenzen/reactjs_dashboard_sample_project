// src/layouts/DashboardLayout.tsx
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import HeaderV2 from "./Header";
import Sidebar from "./Sidebar";

// src/layouts/DashboardLayout.tsx
export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed}></Sidebar>

      {/* Main Layout */}
      <div className={`flex-1 ${collapsed ? "ml-24" : "ml-64"}`}>
        {/* Header */}
        <HeaderV2
          collapsed={collapsed}
          onToggle={() => setCollapsed((prev) => !prev)}
        ></HeaderV2>

        {/* Page Content */}
        <main className="mt-16 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
