import { NavLink } from "react-router-dom";
import { useState } from "react";
import '../index.css';
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-emerald-400 font-semibold"
      : "text-slate-300 hover:text-emerald-400 transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-slate-900/80 backdrop-blur border-b border-slate-700">
      {/* Container */}
      <div className="max-w-341.5 mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-lg font-semibold text-white" draggable={false}>
            Brien<span className="text-emerald-400">.</span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={getLinkClass} draggable={false}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 text-2xl hover:text-emerald-400 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <div className="max-w-[1366px] mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-400 font-semibold"
                    : "text-slate-300 hover:text-emerald-400 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
