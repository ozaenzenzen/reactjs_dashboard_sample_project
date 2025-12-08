import { redirect, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/layout";
import DashboardLayout from "./routes/dashboard/dashboard_layout";

import DashboardPage, {
  dashboardLoader,
} from "./routes/dashboard/DashboardPage";
import RegisterPage, { registerAction } from "./routes/register/RegisterPage";
import LoginPage from "./routes/login/LoginPage";
// import LoginPage, { loginAction } from "./routes/login/LoginPage";
import { loginAction } from "./routes/login/support/login_action";
import NotFoundPage from "./routes/NotFoundPage";
import EventManagementLayout from "./routes/dashboard/event_management/EventManagementLayout";
import UserManagementLayout from "./routes/dashboard/user_management/UserManagementLayout";

// Fake auth
const getAuth = () => localStorage.getItem("isLoggedIn") === "true";

const requireAuth = async () => {
  if (!getAuth())
    throw redirect("/login?redirect=" + encodeURIComponent(location.pathname));
  return null;
};

const requireGuest = async () => {
  if (getAuth()) throw redirect("/dashboard");
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, loader: requireGuest, element: <LoginPage /> },
      {
        path: "login",
        element: <LoginPage />,
        loader: requireGuest,
        action: loginAction,
      },
      {
        path: "register",
        element: <RegisterPage />,
        loader: requireGuest,
        action: registerAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: requireAuth,
        children: [
          {
            index: true,
            element: <DashboardPage />,
            loader: dashboardLoader,
          },

          {
            path: "event-management",
            element: <EventManagementLayout />,
            children: [
              {
                index: true,
                element: (
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      Event Management Page
                    </h1>
                    <p className="mt-2 text-gray-600">
                      Welcome to event management page
                    </p>
                  </div>
                ),
              },
              {
                path: "all-event",
                element: <h1 className="title">All Event</h1>,
              },
              {
                path: "create-new-event",
                element: <h1 className="title">Create New Event</h1>,
              },
              {
                path: "categories",
                element: <h1 className="title">Category</h1>,
              },
              {
                path: "reports",
                element: <h1 className="title">Report</h1>,
                children: [
                  {
                    index: true,
                    element: (
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                          Event Reports Page
                        </h1>
                        <p className="mt-2 text-gray-600">
                          Welcome to event reports page
                        </p>
                      </div>
                    ),
                  },
                  {
                    path: "participation",
                    element: <h1 className="title">Participation Summary</h1>,
                  },
                  {
                    path: "tournament-overview",
                    element: <h1 className="title">Tournament Overview</h1>,
                  },
                  {
                    path: "player-performance",
                    element: <h1 className="title">Player Performance</h1>,
                  },
                  {
                    path: "category-popularity",
                    element: <h1 className="title">Category Popularity</h1>,
                  },
                  {
                    path: "team-ranking",
                    element: <h1 className="title">Team Ranking</h1>,
                  },
                ],
              },
              { path: "publish", element: <h1 className="title">Publish</h1> },
              { path: "live", element: <h1 className="title">Live</h1> },
            ],
          },
          {
            path: "user-management",
            element: <UserManagementLayout />,
            children: [
              {
                index: true,
                element: (
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      User Management Page
                    </h1>
                    <p className="mt-2 text-gray-600">
                      Welcome to user management page
                    </p>
                  </div>
                ),
              },
              { path: "user", element: <h1 className="title">User</h1> },
              { path: "role", element: <h1 className="title">Role</h1> },
            ],
          },
          {
            path: "audit-trail",
            element: <h1 className="title">Audit Trail</h1>,
          },
          { path: "settings", element: <h1 className="title">Settings</h1> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
