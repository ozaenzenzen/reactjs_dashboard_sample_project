// src/routes/dashboard/event-management/EventManagementLayout.tsx
import { Outlet } from "react-router-dom";

export default function EventManagementLayout() {
  return (
    <div className="space-y-6">
      {/* <h1 className="title">Event Management</h1> */}
      {/* Add any section-specific headers, tabs, or common UI here */}
      <Outlet />
    </div>
  );
}