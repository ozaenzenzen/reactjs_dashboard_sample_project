import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  Bell,
  Search,
  User,
  LogOut,
  Settings,
  ChartBar,
  ChartArea,
  ReceiptPoundSterling,
  PersonStanding,
  BoxIcon,
  Settings2,
  ChevronDown,
} from "lucide-react"; // optional: lucide icons

type NavItem = {
  icon?: React.ReactNode;
  to: string;
  label: string;
  end?: boolean;
  subItems?: NavItem[];
};

const navItems: NavItem[] = [
  { icon: <ChartBar />, to: "/dashboard", label: "Overview", end: true },

  {
    icon: <Settings2 />,
    to: "/dashboard/event-management",
    label: "Event Management",
    subItems: [
      {
        to: "/dashboard/event-management/all-event",
        label: "All Event",
      },
      {
        to: "/dashboard/event-management/create-new-event",
        label: "Create New Event",
      },
      { to: "/dashboard/event-management/categories", label: "Category" },
      {
        to: "/dashboard/event-management/reports",
        label: "Report",
        subItems: [
          {
            to: "/dashboard/event-management/reports/participation",
            label: "Participation",
          },
          {
            to: "/dashboard/event-management/reports/tournament-overview",
            label: "Tournament Overview",
          },
          {
            to: "/dashboard/event-management/reports/player-performance",
            label: "Player Performance",
          },
          {
            to: "/dashboard/event-management/reports/category-popularity",
            label: "Category Popularity",
          },
          {
            to: "/dashboard/event-management/reports/team-ranking",
            label: "Team Ranking",
          },
        ],
      },
    ],
  },
  {
    icon: <Settings2 />,
    to: "/dashboard/user-management",
    label: "User Management",
    subItems: [
      { to: "/dashboard/user-management/user", label: "User" },
      { to: "/dashboard/user-management/role", label: "Roles & Permission" },
    ],
  },
  { icon: <Settings2 />, to: "/dashboard/settings", label: "Settings" },
  { icon: <ChartArea />, to: "/dashboard/audit-trail", label: "Audit Trail" },
] as const;

type Props = {
  collapsed: boolean;
};

export default function Sidebar({ collapsed }: Props) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  // const toggleMenu = (label: string) => {
  //   setOpenMenus((prev) => ({
  //     ...prev,
  //     [label]: !prev[label],
  //   }));
  // };
  const toggleMenu = (key: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const NavItemComponent = ({
    item,
    depth = 0,
  }: {
    item: NavItem;
    depth?: number;
  }) => {
    // const hasSubItems = !!item.subItems?.length;
    // const isOpen = openMenus[item.to];
    // const isActive =
    //   location.pathname === item.to ||
    //   location.pathname.startsWith(item.to + "/");
    const hasSubItems = !!item.subItems?.length;
    const isOpen = openMenus[item.label];
    const isActive =
      location.pathname === item.to ||
      (hasSubItems && location.pathname.startsWith(item.to + "/"));

    return (
              <div key={item.to}>
                {/* Parent Item */}
                <div
                  className={`group relative flex items-center gap-3 px-4 py-3 my-1 rounded-xl text-sm font-medium transition-all cursor-pointer
              ${hasSubItems ? "hover:bg-gray-50" : ""}
            `}
                  onClick={() => hasSubItems && toggleMenu(item.label)}
                >
                  {/* Active indicator bar (only if exact match or child is active) */}
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className="absolute inset-0 rounded-xl"
                    // This helps detect if parent route is active
                  >
                    {({ isActive }) =>
                      isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded-r-full" />
                      )
                    }
                  </NavLink>

                  <div className="flex items-center gap-3 w-full text-purple-700">
                    {item.icon}
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-start text-purple-700">{item.label}</span>
                        {hasSubItems && (
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Sub Items - Only show when expanded and sidebar not collapsed */}
                {hasSubItems && !collapsed && isOpen && (
                  <div className="ml-9 space-y-1 mt-1 border-l-2 border-gray-200 pl-4">
                    {item.subItems!.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        end={subItem.end}
                        className={({ isActive }) =>
                          `block py-2 px-3 text-sm rounded-lg transition-all text-start ${
                            isActive
                              ? "bg-purple-50 text-purple-700 font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          }`
                        }
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );

    return (
      <div>
        {/* ===== Parent Item ===== */}
        <div
          className={`
          group relative flex items-center gap-3 px-4 py-3 my-1 rounded-xl text-sm font-medium transition-all cursor-pointer
          ${
            isActive
              ? "bg-purple-50 text-purple-700"
              : "text-gray-700 hover:bg-gray-50"
          }
        `}
          style={{ paddingLeft: 16 + depth * 12 }}
          // onClick={() => hasSubItems && toggleMenu(item.to)}
          onClick={() => {
            if (hasSubItems) toggleMenu(item.to);
          }}
        >
          {/* Active Indicator */}
          {isActive && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded-r-full" />
          )}

          {/* If NO subItems -> click navigates */}
          {/* {!hasSubItems && (
            <NavLink to={item.to} end={item.end} className="absolute inset-0" />
          )} */}
          <NavLink to={item.to} end={item.end} className="absolute inset-0" />

          {/* Icon */}
          {item.icon && (
            <div className={collapsed ? "mx-auto" : ""}>{item.icon}</div>
          )}

          {/* Label + Chevron */}
          {!collapsed && (
            <div className="flex items-center justify-between flex-1">
              <span className="truncate">{item.label}</span>
              {hasSubItems && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
          )}
        </div>

        {/* ===== CHILDREN (RECURSIVE) ===== */}
        {hasSubItems && !collapsed && isOpen && (
          <div className="mt-1 space-y-1">
            {item.subItems!.map((sub) => (
              <NavItemComponent key={sub.to} item={sub} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex flex-col  bg-white border-r border-gray-200 transition-all duration-200 ${
        collapsed ? "w-24" : "w-64"
      }`}
    >
      <div className="p-6 shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-2xl font-bold">E</span>
          </div>
          {!collapsed && (
            <span className="text-xl font-semibold text-gray-900">
              Event Management Sports
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            // const hasSubItems = !!item.subItems?.length;
            // const isOpen = openMenus[item.label];
            return <NavItemComponent key={item.to} item={item} />;
          })}
        </div>
      </nav>

      {/* Optional: User at bottom (like in screenshot) */}
      <div className="border-t border-gray-200">
        <div className="relative">
          {/* Menu User */}
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                AC
              </div>
              {!collapsed && (
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Anita Cruz
                  </p>
                  <p className="text-xs text-gray-500">anita@commerce.com</p>
                </div>
              )}
            </div>
          </button>

          {/* Dropdown */}
          {showUserMenu && (
            <div className="absolute left-full bottom-0 ml-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <a
                href="/dashboard/profile"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
              >
                <User className="w-4 h-4" />
                My Profile
              </a>
              <a
                href="/dashboard/settings"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
              >
                <Settings className="w-4 h-4" />
                Settings
              </a>
              <hr className="my-2 border-gray-200" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}

          {/* Overlay to close dropdown when clicking outside */}
          {showUserMenu && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowUserMenu(false)}
            />
          )}
        </div>
      </div>
    </aside>
  );
}
