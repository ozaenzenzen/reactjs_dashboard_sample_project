// src/pages/RegisterPage.tsx
import { Form, useActionData, Link, redirect } from "react-router-dom";

export async function registerAction() {
  // Simulate registration
  await new Promise((r) => setTimeout(r, 500));
  localStorage.setItem("isLoggedIn", "true");
  throw redirect("/dashboard");
}

export default function RegisterPage() {
  const error = useActionData() as string | undefined;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-indigo-500">Register</h1>
      <Form method="post">
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full p-3 mb-4 border rounded text-gray-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 mb-4 border rounded text-gray-500"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 mb-4 border rounded text-gray-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Register
        </button>
      </Form>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <p className="mt-4 text-sm text-center text-black">
        Have an account? <Link to="/login" className="text-indigo-600">Login</Link>
      </p>
    </div>
  );
}