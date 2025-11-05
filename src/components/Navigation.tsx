import { NavLink } from "./NavLink";
import { Upload, LayoutDashboard, Download, History } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", icon: Upload, label: "Upload" },
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/results", icon: Download, label: "Results" },
    { to: "/history", icon: History, label: "History" },
  ];

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Template Converter
            </h1>
          </div>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                activeClassName="text-foreground bg-secondary shadow-glow"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
