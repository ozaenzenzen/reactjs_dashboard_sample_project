// src/pages/LoginPage.tsx
import {
  Form,
  useActionData,
  useSearchParams,
  Link,
  redirect,
} from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function LoginPage() {
  const error = useActionData() as string | undefined;
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirect");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-md grid grid-cols-2 overflow-hidden">
        {/* {Left Section} */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="p-10 text-2xl font-bold mb-8 text-indigo-500">
            Login
          </h1>

          <Form
            method="post"
            action={`/login${redirectTo ? `?redirect=${redirectTo}` : ""}`}
          >
            {/* Email */}
            <div className="flex flex-col items-start">
              <label htmlFor="email" className="font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue="user@example.com"
                className="w-full border rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-purple-500 outlinenon text-gray-700"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col items-start">
              <label
                htmlFor="password"
                className="font-medium text-gray-700 mb-2 flex flex-col items-start"
              >
                Password
              </label>
              <div className="flex w-full border rounded-lg overflow-hidden mb-4 focus:ring-2 focus-within:ring-2 focus-within:ring-purple-500 text-gray-700">
                <input
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  defaultValue="password"
                  required
                  className="flex-1 px-4 py-3 text-gray-700 bg-transparent outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-3 text-gray-400 hover:text-gray-700 bg-transparent"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center justify-right">
              <label className="flex items-center"></label>
              <input
                type="checkbox"
                name="remember"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-50"
              />
              <span className="ml-2 text-sm text-gray-600">Remember Me</span>
            </div>
            <div className="mb-6"></div>

            {/* Button */}
            <button
              type="submit"
              className="bg-purple-600 text-white w-full py-3 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Login
            </button>
          </Form>

          {error && <p className="text-red-600 mt-4 text-sm">{error}</p>}

          <p className="text-sm text-gray-600 mt-4">
            No Account?
            {" "}
            <Link to="/register" className="text-purple-600 font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-purple-600 text-white flex flex-col justify-center items-center p-10 text-center">
          <h3 className="text-3xl font-bold leading-tight mb-8">
            Very good works are
            <br />
            waiting for you
            <br />
            Sign In Now
          </h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcAwRhmH89etSpLz71QohJBBMaaPYoUbxfQ&s"
            alt="Welcome"
            className="w-64 md:w-80"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full min-w-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="mt-10 p-6 bg-white rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-6 text-indigo-500">Login</h1>
          <Form
            method="post"
            action={`/login${redirectTo ? `?redirect=${redirectTo}` : ""}`}
          >
            <div>
              <label htmlFor="email" className="font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue="user@example.com"
                required
                className="w-full p-3 mb-4 border rounded text-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                defaultValue="password"
                required
                className="w-full p-3 mb-4 border rounded text-gray-500"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700"
            >
              Login
            </button>
          </Form>
          {error && <p className="text-red-600 mt-4 text-sm">{error}</p>}
          <p className="mt-4 text-sm text-center text-black">
            No account?{" "}
            <Link to="/register" className="text-indigo-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
