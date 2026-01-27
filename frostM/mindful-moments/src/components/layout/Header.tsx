import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Check In", path: "/check-in" },
  { label: "Insights", path: "/insights" },
  { label: "Support", path: "/support" },
  { label: "Dashboard", path: "/dashboard" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Heart className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="font-display text-xl font-semibold text-foreground">
              MindBloom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/safety">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Need Help?
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="btn-breathe rounded-xl">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2">
                <Link to="/safety" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    Need Help?
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-xl">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
