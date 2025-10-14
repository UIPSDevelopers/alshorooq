import React from "react";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <TestimonialsSection />
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold mb-4">Share Your Experience</h3>
          <p className="text-gray-700">
            Have you used our cleaning and maintenance services? We'd love to hear your feedback!
            Contact us to submit your testimonial or read more reviews from our clients.
          </p>
        </div>
      </main>
    </div>
  );
}
