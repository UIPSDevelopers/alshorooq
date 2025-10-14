import React from "react";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">About Us</h1>
        <p className="text-gray-700 mb-4">
          AlShorooq AlSatae Building Maintenance and Cleaning Services is a Dubai-based cleaning & maintenance company providing reliable,
          professional services to homes and businesses. We use trained staff, modern equipment,
          and eco-friendly products to deliver consistent quality.
        </p>

        <h2 className="mt-8 text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700">
          To create healthier and more comfortable spaces through dependable cleaning and maintenance
          solutions tailored to client needs.
        </p>

        <h2 className="mt-8 text-xl font-semibold mb-2">Why Choose Us</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Trained, vetted staff</li>
          <li>Eco-friendly cleaning supplies</li>
          <li>Flexible scheduling and competitive pricing</li>
          <li>Satisfaction guarantee</li>
        </ul>
      </main>
    </div>
  );
}
