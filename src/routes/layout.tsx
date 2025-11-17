// src/layouts/RootLayout.tsx
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function RootLayout() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  var layout = (
    <div className="h-screen min-w-screen flex flex-col bg-gray-50">
      {/* <main className=""> */}
        <div className="">
          <Outlet />
        </div>
      {/* </main> */}
    </div>
  );
  return layout;

  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-gray-50">
      <header className="fixed w-full bg-white shadow-sm border-b">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            MyApp
          </Link>
          <nav className="flex gap-4 items-center">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="text-sm text-gray-700 hover:text-indigo-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-sm text-gray-700 hover:text-indigo-600"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm text-gray-700 hover:text-indigo-600"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            MyApp
          </Link>
          <nav className="flex gap-4 items-center">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="text-sm text-gray-700 hover:text-indigo-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-sm text-gray-700 hover:text-indigo-600"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm text-gray-700 hover:text-indigo-600"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="w-full flex-1 bg-gray-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
