import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="src/assets/logo.png"
            alt="AlShorooq Logo"
            className="w-20 h-20 object-contain"
          />
          <span className="hidden xl:block text-gray-600 font-medium text-xs md:text-sm leading-tight px-4">
            AlShorooq AlSatae <br />Building Maintenance and Cleaning Services
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <NavLink
              key={l.name}
              to={l.path}
              className={({ isActive }) =>
                `font-medium ${isActive ? "text-blue-700" : "text-gray-700"} hover:text-blue-600`
              }
            >
              {l.name}
            </NavLink>
          ))}

          {/* Booking Button */}
          <Link
            to="/booking"
            className="ml-4 inline-block bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((l) => (
              <NavLink
                key={l.name}
                to={l.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block font-medium ${isActive ? "text-blue-700" : "text-gray-700"}`
                }
              >
                {l.name}
              </NavLink>
            ))}

            {/* Booking Button Mobile */}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="block mt-2 bg-blue-700 text-white text-center py-2 rounded-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
