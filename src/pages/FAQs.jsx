"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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
      
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-blue-700 text-center">
          Frequently Asked Questions
        </h1>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-2xl shadow p-4">
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-gray-800 hover:text-blue-700 transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-gray-700">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Still have questions? Contact us directly for more information.
          </p>
          <a
            href="tel:+971501234567"
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all"
          >
            Call Us Now
          </a>
        </div>
      </main>
    </div>
  );
}
