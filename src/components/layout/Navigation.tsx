import { Users, Activity, BarChart3, Settings, Trophy, DollarSign } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Activity, label: "Dashboard", exact: true },
  { to: "/players", icon: Users, label: "Players" },
  { to: "/sessions", icon: Trophy, label: "Sessions" },
  { to: "/reports", icon: BarChart3, label: "Reports" },
  { to: "/settings", icon: Settings, label: "Settings" }
];

export function Navigation() {
  return (
    <nav className="bg-card border-r border-border h-screen w-64 fixed left-0 top-0 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl">
            <DollarSign className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Poker Tracker</h1>
            <p className="text-xs text-muted-foreground">Home Game Manager</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map(({ to, icon: Icon, label, exact }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={exact}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                    "hover:bg-secondary hover:text-secondary-foreground",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground"
                  )
                }
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          <p>Rake-free poker sessions</p>
          <p className="mt-1">v1.0.0</p>
        </div>
      </div>
    </nav>
  );
}