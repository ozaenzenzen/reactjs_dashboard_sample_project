import React from "react";

type SampleTableModel = {
  id: number;
  name: string;
  email: string;
  role: string;
};
const data: SampleTableModel[] = [
  { id: 1, name: "Admin 1", email: "sampleemail1@test.com", role: "admin" },
  { id: 2, name: "Admin 2", email: "sampleemail2@test.com", role: "admin" },
  { id: 3, name: "Admin 3", email: "sampleemail3@test.com", role: "admin" },
  { id: 4, name: "Admin 4", email: "sampleemail4@test.com", role: "admin" },
  { id: 5, name: "Admin 5", email: "sampleemail5@test.com", role: "admin" },
];

export function TableComponent() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EventManagementPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">
        Event Management Pagess
      </h1>
      <p className="mt-2 text-gray-600 mb-2">Welcome to event management pagess</p>
      <TableComponent />
    </div>
  );
}
