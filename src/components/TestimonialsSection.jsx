import React from "react";

const TESTIMONIALS = [
  {
    name: "Aisha K.",
    title: "Homeowner",
    text: "Excellent, punctual and very thorough. My apartment has never looked better.",
  },
  {
    name: "Omar S.",
    title: "Office Manager",
    text: "Professional team and consistent results. Great for our weekly office cleanings.",
  },
  {
    name: "Leila M.",
    title: "Landlord",
    text: "Move-out cleanings were always reliable — tenants handed keys back in great condition.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-700 mb-4">“{t.text}”</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
