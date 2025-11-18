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
    <div className="">
      <div className="h-screen bg-white rounded-3xl shadow-md flex flex-row overflow-hidden">
        {/* Left Section */}
        <div className="mx-auto max-w-md h-full flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-8 text-[#6E39CB]">Register</h1>

          <div className="w-[330px]">
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
                className="w-full bg-[#F4F5F9] border border-[#DBDCDE] rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col items-start">
              <label htmlFor="email" className="font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full bg-[#F4F5F9] border border-[#DBDCDE] rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-purple-500 outline-none text-gray-700"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col items-start">
              {/* <div className="flex items-center border rounded-lg overflow-hidden mb-4 focus-within:ring-2 focus-within:ring-purple-500"> */}
              <label
                htmlFor="password"
                className="font-medium text-gray-700 mb-2 flex flex-col items-start"
              >
                Password
              </label>
              <div className="flex w-full bg-[#F4F5F9]  border border-[#DBDCDE] rounded-lg overflow-hidden mb-4 focus:ring-2 focus-within:ring-2 focus-within:ring-purple-500 text-gray-700">
                <input
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="bg-[#F4F5F9] border border-none active:outline-none flex-1 px-4 py-3 text-gray-700 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-3 text-gray-400 hover:text-gray-700 border border-none bg-transparent"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-gray-500 mb-6">
              You are agreeing to the{" "}
              <a href="#" className="text-[#6E39CB]">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#6E39CB]">
                Privacy Policy
              </a>
              .
            </p>

            {/* Button */}
            <button className="bg-[#6E39CB] text-white w-full py-3 rounded-lg font-medium hover:bg-[#6E39CB] transition">
              Get started
            </button>
          </div>

          {/* Sign in */}
          <p className="text-sm text-gray-600 mt-4">
            Already a member?{" "}
            <Link
              to="/login"
              className="text-[#6E39CB] font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex flex-col lg:w-3/5 rounded-3xl bg-[#6E39CB] text-white justify-center items-center my-5 mr-5 text-center">
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
