import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

const navItems = [
  { label: "Features", to: "/features" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Locations", to: "/locations/usa" as const, hasDropdown: true },
  { label: "Industries", to: "/industries/dentists" as const, hasDropdown: true },
  { label: "Pricing", to: "/pricing" as const },
  { label: "FAQ", to: "/faq" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 rounded border-2 border-cyan flex items-center justify-center text-cyan text-[9px] font-bold leading-tight text-center">
            AI<br />PHONE<br />AGENTS
          </div>
          <span className="text-cyan font-bold text-lg leading-tight hidden sm:block">
            AI Phone<br />Agent
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-foreground/90 hover:text-cyan transition-colors text-sm font-medium flex items-center gap-1"
              activeProps={{ className: "text-cyan" }}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-primary text-sm">
          Book Your Free Strategy Call
        </Link>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block text-foreground hover:text-cyan py-2 text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary text-sm w-full">
            Book Your Free Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
}
