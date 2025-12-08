// src/routes/dashboard/user-management/UserManagementLayout.tsx
import { Outlet } from "react-router-dom";

export default function UserManagementLayout() {
  return (
    <div className="space-y-6">
      {/* <h1 className="title">User Management</h1> */}
      {/* Add any section-specific headers, tabs, or common UI here */}
      <Outlet />
    </div>
  );
}