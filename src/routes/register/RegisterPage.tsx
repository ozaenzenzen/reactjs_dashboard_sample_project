// src/pages/RegisterPage.tsx
import { Form, useActionData, Link, redirect } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export async function registerAction() {
  // Simulate registration
  await new Promise((r) => setTimeout(r, 500));
  localStorage.setItem("isLoggedIn", "true");
  throw redirect("/dashboard");
}

export default function RegisterPage() {
  const error = useActionData() as string | undefined;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-md grid md:grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-8 text-indigo-500">Register</h1>

          {/* Full Name */}
          <div className="flex flex-col items-start">
            <label
              htmlFor="fullname"
              className="font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700"
            />
          </div>

          {/* Full Name */}
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="">
            <label
              htmlFor="password"
              className="font-medium text-gray-700 mb-2 flex flex-col items-start"
            >
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full border rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700"
            />
            <div className="flex flex-col items-end">
              <button
                type="button"
                className="text-gray-500 mb-3 hover:text-gray-900"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center border rounded-lg overflow-hidden mb-4 focus-within:ring-2 focus-within:ring-purple-500">
            <input
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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

          {/* Terms */}
          <p className="text-xs text-gray-500 mb-6">
            You are agreeing to the{" "}
            <a href="#" className="text-purple-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-600">
              Privacy Policy
            </a>
            .
          </p>

          {/* Button */}
          <button className="bg-purple-600 text-white w-full py-3 rounded-lg font-medium hover:bg-purple-700 transition">
            Get started
          </button>

          {/* Sign in */}
          <p className="text-sm text-gray-600 mt-4">
            Already a member?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Sign in
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
            Sign up Now
          </h3>

          <img
            src="https://i.ibb.co/Zm2Q0wX/image.png"
            alt="Welcome"
            className="w-64 md:w-80"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-lg shadow">
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
        Have an account?{" "}
        <Link to="/login" className="text-indigo-600">
          Login
        </Link>
      </p>
    </div>
  );
}
