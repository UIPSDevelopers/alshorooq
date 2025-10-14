import React from "react";
import Navbar from "@/components/Navbar";

const FAQS = [
  { q: "How do I book a service?", a: "Use the Booking page or call +971 50 123 4567." },
  { q: "Do you use eco-friendly products?", a: "Yes — we prioritize eco-friendly cleaning solutions." },
  { q: "Are your staff background-checked?", a: "All team members are vetted and professionally trained." },
  { q: "What if I'm not satisfied?", a: "We offer a satisfaction guarantee — contact us within 48 hours." },
];

export default function FAQs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold mb-2">{f.q}</h3>
              <p className="text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
