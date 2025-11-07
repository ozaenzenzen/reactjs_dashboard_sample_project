// src/pages/LoginPage.tsx
import {
  Form,
  useActionData,
  useSearchParams,
  Link,
  redirect,
} from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  const error = useActionData() as string | undefined;
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirect");

  // return (
  //   <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
  //     <div className="w-full max-w-md">
  //       <div className="bg-white rounded-lg shadow-xl p-8">
  //         <div className="text-center mb-8">
  //           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
  //           <p className="text-gray-600">Sign in to your account</p>
  //         </div>

  //         <Form method="post" className="space-y-6">
  //           {redirect && (
  //             <input type="hidden" name="redirect" value={redirect} />
  //           )}

  //           <div>
  //             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
  //               Email Address
  //             </label>
  //             <input
  //               type="email"
  //               id="email"
  //               name="email"
  //               required
  //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
  //               placeholder="you@example.com"
  //             />
  //           </div>

  //           <div>
  //             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
  //               Password
  //             </label>
  //             <input
  //               type="password"
  //               id="password"
  //               name="password"
  //               required
  //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
  //               placeholder="••••••••"
  //             />
  //           </div>

  //           <div className="flex items-center justify-between">
  //             <label className="flex items-center">
  //               <input
  //                 type="checkbox"
  //                 name="remember"
  //                 className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
  //               />
  //               <span className="ml-2 text-sm text-gray-600">Remember me</span>
  //             </label>
  //             <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
  //               Forgot password?
  //             </a>
  //           </div>

  //           <button
  //             type="submit"
  //             className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium transition"
  //           >
  //             Sign In
  //           </button>
  //         </Form>

  //         <div className="mt-6 text-center">
  //           <p className="text-sm text-gray-600">
  //             Don't have an account?{' '}
  //             <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
  //               Sign up
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

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
