import React from "react";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <ServicesSection />
      </main>
    </div>
  );
}
