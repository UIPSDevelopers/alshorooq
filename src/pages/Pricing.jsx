import React from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const PACKAGES = [
  { name: "Basic", price: "AED 120", desc: "Light cleaning (1 bed / small flat) — 2 hours" },
  { name: "Standard", price: "AED 220", desc: "Full clean (2-3 bed) — 3-4 hours" },
  { name: "Deep", price: "AED 420", desc: "Deep cleaning & sanitization (3+ bed) — 5+ hours" },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Pricing & Packages</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {PACKAGES.map((p) => (
            <div key={p.name} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-2xl font-bold text-blue-700 mb-2">{p.price}</p>
              <p className="text-gray-700 mb-4">{p.desc}</p>
              <Link to="/booking" className="inline-block bg-blue-700 text-white px-4 py-2 rounded">
                Book This
              </Link>
            </div>
          ))}
        </div>

        <p className="text-gray-700">
          Note: Final pricing depends on property size and scope. Use the booking form or contact us
          for a precise quote.
        </p>
      </main>
    </div>
  );
}
