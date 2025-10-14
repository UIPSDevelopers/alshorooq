import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import FAQs from "@/pages/FAQs";
import Contact from "@/pages/Contact";
import Booking from "@/pages/Booking";
import Footer from "@/components/Footer";
import Testimonials from "@/pages/Testimonials";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/booking" element={<Booking />} />
          {/* Put a catch-all route if desired */}
        </Routes>

        {/* Footer placed outside pages so it always shows; pages include their own Navbar */}
        <Footer />
      </div>
    </Router>
  );
}
