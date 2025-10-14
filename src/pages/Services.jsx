import React from "react";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <ServicesSection />
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold mb-4">Custom Packages</h3>
          <p className="text-gray-700">
            We can customize service frequency, team size and scope to match your property’s needs.
            Contact us for a tailored quote.
          </p>
        </div>
      </main>
    </div>
  );
}
