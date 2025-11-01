// src/layouts/RootLayout.tsx
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function RootLayout() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            MyApp
          </Link>
          <nav className="flex gap-4 items-center">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="text-sm text-gray-700 hover:text-indigo-600">
                  Login
                </Link>
                <Link to="/register" className="text-sm text-gray-700 hover:text-indigo-600">
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="text-sm text-gray-700 hover:text-indigo-600">
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
      <main>
        <Outlet />
      </main>
    </div>
  );
}