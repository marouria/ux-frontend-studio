import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-lg text-foreground">
          Portfolio
        </Link>
        <div className="flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("/") && !item.href.startsWith("/#") ? (
              <Link
                key={item.label}
                to={item.href}
                className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
