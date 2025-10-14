"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Check } from "lucide-react";

export default function Home() {
  const features = [
    { title: "Eco-Friendly Products", description: "Safe for your health and the environment." },
    { title: "Professional Team", description: "Trained and vetted cleaning experts." },
    { title: "Flexible Scheduling", description: "Services tailored to your convenience." },
    { title: "Satisfaction Guarantee", description: "We ensure you're delighted with our work." },
  ];

  const faqs = [
    { question: "How do I book a service?", answer: "Use our Booking page or call +971 50 123 4567." },
    { question: "Are your products safe for children and pets?", answer: "Yes, we only use eco-friendly, non-toxic products." },
    { question: "What areas do you serve?", answer: "We cover all residential and commercial areas across Dubai." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-700">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl shadow p-4">
                  <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-blue-700 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-blue-700 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience a Cleaner, Healthier Space?</h2>
            <p className="mb-8 text-lg">Schedule your cleaning service today and enjoy a spotless environment.</p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              Get a Free Quote
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
