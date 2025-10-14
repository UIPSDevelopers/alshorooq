import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-2">CleanSmart Services</h4>
          <p className="text-sm max-w-sm">
            Professional cleaning and maintenance services for homes and businesses in Dubai.
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Contact</h5>
          <p className="flex items-center gap-2"><Phone /> +971 50 123 4567</p>
          <p className="flex items-center gap-2"><Mail /> info@cleanpro.ae</p>
          <p className="flex items-center gap-2"><MapPin /> Dubai, United Arab Emirates</p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Hours & Links</h5>
          <p className="flex items-center gap-2"><Clock /> Mon–Sat: 8:00 AM – 6:00 PM</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/services" className="hover:underline">Our Services</Link>
            <Link to="/pricing" className="hover:underline">Pricing / Get a Quote</Link>
            <Link to="/booking" className="hover:underline">Book Now</Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-800 text-center py-3 text-sm">
        © {new Date().getFullYear()} CleanSmart Services. All rights reserved.
      </div>
    </footer>
  );
}
