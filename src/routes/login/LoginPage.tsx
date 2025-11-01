// src/pages/LoginPage.tsx
import { Form, useActionData, useSearchParams, Link, redirect } from "react-router-dom";

export async function loginAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const redirectTo = new URL(request.url).searchParams.get("redirect") || "/dashboard";

  // Fake auth
  if (email === "user@example.com" && password === "password") {
    localStorage.setItem("isLoggedIn", "true");
    throw redirect(redirectTo);
  }

  return "Invalid credentials";
}

export default function LoginPage() {
  const error = useActionData() as string | undefined;
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirect");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <Form method="post" action={`/login${redirectTo ? `?redirect=${redirectTo}` : ""}`}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue="user@example.com"
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          defaultValue="password"
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700"
        >
          Login
        </button>
      </Form>
      {error && <p className="text-red-600 mt-4 text-sm">{error}</p>}
      <p className="mt-4 text-sm text-center">
        No account? <Link to="/register" className="text-indigo-600">Register</Link>
      </p>
    </div>
  );
}