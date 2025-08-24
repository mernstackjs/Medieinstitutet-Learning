import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Hem", href: "/" },
    { path: "/kurser", label: "Kurser", href: "/kurser" },
    { path: "/projekt", label: "Projekt", href: "/projekt" },
    { path: "/kontakta-mig", label: "Kontakta Mig", href: "/kontakta-mig" },
  ];

  return (
    <nav className="bg-black/70 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-pink-500 transition-all duration-300"
          >
            Ahmed Abdirizaak
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-pink-500 hover:scale-105 relative ${
                  location.pathname === item.path
                    ? "text-pink-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pink-500 after:rounded-full"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium transition-all duration-300 px-4 py-2 rounded-md ${
                  location.pathname === item.path
                    ? "bg-pink-500 text-black"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
