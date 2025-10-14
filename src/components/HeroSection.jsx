import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white shadow-sm py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 md:gap-x-12">
        {/* Text Content */}
        <motion.div
          className="md:w-2/5 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">
            Spotless Spaces, Exceptional Service
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            From homes and offices to commercial spaces, we provide professional, reliable, and eco-friendly cleaning and maintenance services. Our trained team ensures every corner is spotless, every surface sanitized, and every space maintained to the highest standards — so you can focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white"
            >
              Request Your Free Quote
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-3/5 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="Cleaning Illustration"
            className="w-full max-w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
