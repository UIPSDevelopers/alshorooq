"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import DirhamIcon from "@/components/icons/DirhamIcon";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Leaf, Users, CalendarCheck, Smile } from "lucide-react";
import { UserCheck, DollarSign, Clock, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  const features = [
    {
      title: "Eco-Friendly Products",
      description: "Safe for your health and the environment.",
      icon: Leaf,
    },
    {
      title: "Professional Team",
      description: "Trained and vetted cleaning experts.",
      icon: Users,
    },
    {
      title: "Flexible Scheduling",
      description: "Services tailored to your convenience.",
      icon: CalendarCheck,
    },
    {
      title: "Satisfaction Guarantee",
      description: "We ensure you're delighted with our work.",
      icon: Smile,
    },
  ];

  const faqs = [
    {
      question: "How do I book a service?",
      answer: "Use our Booking page or call +971 50 123 4567.",
    },
    {
      question: "Are your products safe for children and pets?",
      answer: "Yes, we only use eco-friendly, non-toxic products.",
    },
    {
      question: "What areas do you serve?",
      answer: "We cover all residential and commercial areas across Dubai.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />

        {/* Why Choose AlShorooq Section */}
        <motion.section
          className="relative w-full mt-20 py-20 px-6 bg-blue-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Background Elements */}
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-pink-300/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
              ✨ Why Choose AlShorooq
            </h2>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              <Card className="p-6 shadow-xl rounded-2xl border border-gray-200 bg-white text-left flex items-start gap-4">
                <UserCheck className="w-8 h-8 text-blue-700 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trained Staff</h3>
                  <p className="text-gray-700">
                    Friendly, professional, and trustworthy personnel dedicated
                    to excellence.
                  </p>
                </div>
              </Card>

              <Card className="p-6 shadow-xl rounded-2xl border border-gray-200 bg-white text-left flex items-start gap-4">
                <Leaf className="w-8 h-8 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                  <p className="text-gray-700">
                    We use safe, eco-friendly cleaning solutions to protect your
                    space and the environment.
                  </p>
                </div>
              </Card>

              <Card className="p-6 shadow-xl rounded-2xl border border-gray-200 bg-white text-left flex items-start gap-4">
                <DirhamIcon className="w-8 h-8 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-700">
                    Fair and clear pricing with no hidden costs.
                  </p>
                </div>
              </Card>

              <Card className="p-6 shadow-xl rounded-2xl border border-gray-200 bg-white text-left flex items-start gap-4">
                <Clock className="w-8 h-8 text-purple-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Punctual & Professional
                  </h3>
                  <p className="text-gray-700">
                    We respect your time and ensure professional service every
                    visit.
                  </p>
                </div>
              </Card>

              <Card className="p-6 shadow-xl rounded-2xl border border-gray-200 bg-white text-left flex items-start gap-4">
                <BadgeCheck className="w-8 h-8 text-blue-700 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Satisfaction Guaranteed
                  </h3>
                  <p className="text-gray-700">
                    Our consistent quality keeps clients coming back — your
                    happiness is our priority.
                  </p>
                </div>
              </Card>
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white px-10"
                asChild
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section
        <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all border border-gray-100 rounded-2xl"
              >
                <CardContent className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Icon className="w-10 h-10 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-blue-700">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section> */}
        {/* <TestimonialsSection /> */}

        {/* FAQ Section
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
        </section> */}

        {/* Call to Action Section */}
        <section className="py-20 bg-blue-700 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience a Cleaner, Healthier Space?
            </h2>
            <p className="mb-8 text-lg">
              Schedule your cleaning service today and enjoy a spotless
              environment.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100"
            >
              <Link to="/booking">Get a Free Quote</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
