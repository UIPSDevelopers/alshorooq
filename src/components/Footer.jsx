import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Company Info */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold text-white mb-2">
            AlShorooq AlSatae Building Maintenance and Cleaning Services
          </h2>
          <div className="flex flex-col gap-2 text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+971501234567" className="hover:text-white">
                +971 50 123 4567
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@alshorooq.com" className="hover:text-white">
                info@alshorooq.ae
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Address or Additional Info */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
          <p className="text-gray-300 mb-2">
            Dubai, United Arab Emirates
          </p>
          <p className="text-gray-300">
            © {new Date().getFullYear()} AlShorooq AlSatae. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
