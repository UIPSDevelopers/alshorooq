"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* TEXT CONTENT */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700 leading-tight">
            Welcome to AlShorooq AlSatae Building Maintenance and Cleaning
            Services
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Your trusted partner for professional cleaning and maintenance
            services in the UAE. <br /><br />
            At AlShorooq, we believe that a clean and well-maintained space
            brings comfort, productivity, and peace of mind. Whether it’s your
            home, office, or commercial property, our team is dedicated to
            delivering spotless results with care, reliability, and a personal
            touch.<br /><br />
            From regular cleaning to deep cleaning, A/C duct maintenance, and
            more — we make sure every corner shines and every client is
            satisfied. <br /><br />
            ✨ Clean spaces. Happy faces. <br />
            📞 Contact us today for a free quotation!
          </p>

          <Button
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-base"
          >
            <Link to="/booking">Request Your Free Quote</Link>
          </Button>
        </motion.div>

        {/* IMAGE CONTENT */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600"
            alt="Cleaning Illustration"
            className="w-full max-w-[700px] h-[550px] md:h-[650px] rounded-2xl object-cover object-center shadow-xl"
          />
        </motion.div>
      </div>

      {/* Soft background accent */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
    </section>
  );
}
