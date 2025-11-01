// src/pages/DashboardPage.tsx
import { useLoaderData } from "react-router-dom";

export async function dashboardLoader() {
  // Simulate API
  await new Promise((r) => setTimeout(r, 300));
  return {
    user: "John Doe",
    stats: { customers: 1234, revenue: "$45,231" },
  };
}

export default function DashboardPage() {
  const data = useLoaderData() as Awaited<ReturnType<typeof dashboardLoader>>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, {data.user}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Total Customers</h3>
          <p className="text-3xl font-bold text-indigo-600">{data.stats.customers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Revenue</h3>
          <p className="text-3xl font-bold text-green-600">{data.stats.revenue}</p>
        </div>
      </div>
    </div>
  );
}