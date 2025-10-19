import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { UserCheck, Leaf, DollarSign, Clock, BadgeCheck } from "lucide-react";

const SERVICES = [
  {
    title: "Home Cleaning",
    emoji: "🏠",
    desc: `Enjoy a clean and refreshing home — without the stress.
Our residential cleaning services are designed to make your space shine, whether you need a one-time deep clean or regular housekeeping.
Services include:
• Regular & Deep Cleaning
• Move-In / Move-Out Cleaning
• Kitchen & Bathroom Sanitization
• Window & Glass Cleaning
Perfect for villas, apartments, and residential buildings.`,
    img: "https://images.pexels.com/photos/4176302/pexels-photo-4176302.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
  {
    title: "Office & Commercial Cleaning",
    emoji: "🏢",
    desc: `A clean workspace boosts focus, productivity, and first impressions.
We tailor cleaning schedules to your business needs — daily, weekly, or monthly — keeping your office fresh and organized.
We handle:
• Office & Building Cleaning
• Floor Scrubbing & Polishing
• Washroom & Pantry Cleaning
• Common Area Maintenance
• Post-event Cleaning
Ideal for offices, shops, schools, and commercial facilities.`,
    img: "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
  {
    title: "A/C Cleaning & Maintenance",
    emoji: "❄️",
    desc: `Breathe fresh, cool, and healthy air.
Our professional A/C technicians clean and maintain your system to improve air quality and performance — helping you save energy and breathe easier.
Our A/C services include:
• A/C Duct Cleaning
• Coil & Filter Cleaning
• Drain Line Maintenance
• A/C Unit Servicing
• Preventive Maintenance Plans
Better air, better comfort, better health.`,
    img: "https://images.pexels.com/photos/4098317/pexels-photo-4098317.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
  {
    title: "Deep & Specialized Cleaning",
    emoji: "🧽",
    desc: `For spaces that need extra attention, we offer intensive and detailed cleaning services using modern tools and safe products.
We offer:
• Post-construction & Move-In / Move-Out Deep Cleaning
• Floor Scrubbing & Tile Polishing
• Disinfection & Sanitization
• High Glass & Facade Cleaning
Perfect for new builds, renovations, or spaces needing a total refresh.`,
    img: "https://images.pexels.com/photos/7415106/pexels-photo-7415106.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
  {
    title: "Maintenance Support",
    emoji: "🧰",
    desc: `We don’t just clean — we help you maintain your property.
Our team can take care of small repair and maintenance jobs to keep your place looking its best.
Includes:
• Minor Repairs
• Painting Touch-ups
• General Maintenance Support`,
    img: "https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-16">
          Professional Cleaning & A/C Maintenance You Can Trust
        </h2>

        {/* Service Cards */}
        <div className="space-y-28 relative z-10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              className={`relative flex flex-col md:flex-row items-center gap-12 ${
                i % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-xl border border-gray-200 transition-transform duration-500 hover:scale-105 z-10 relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-300/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-pink-300/30 rounded-full blur-2xl"></div>
              </div>

              {/* Card */}
              <Card className="md:w-1/2 -mt-16 md:-mt-0 shadow-2xl rounded-3xl border border-gray-200 bg-white z-20 relative">
                <CardContent className="p-10 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-700 flex items-center gap-3">
                    {s.emoji} {s.title}
                  </h3>
                  <Separator className="my-4" />
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Custom Packages Card (Bottom) */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="w-full md:w-3/4 shadow-2xl rounded-3xl border border-gray-200 bg-white">
              <CardContent className="p-10 space-y-6 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-700 flex justify-center items-center gap-3">
                  💡 Custom Packages
                </h3>
                <Separator className="my-4" />
                <p className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
                  Every space is unique — that’s why we offer flexible, tailored
                  service plans. Whether you need a one-time service or
                  scheduled cleaning, we’ll design a package that fits your
                  needs and budget perfectly.
                </p>
              </CardContent>
            </Card>
          </motion.div>

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
                    <h3 className="text-xl font-semibold mb-2">
                      Trained Staff
                    </h3>
                    <p className="text-gray-700">
                      Friendly, professional, and trustworthy personnel
                      dedicated to excellence.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 shadow-xl rounded-2xl border border-gray-200 bg-white text-left flex items-start gap-4">
                  <Leaf className="w-8 h-8 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                    <p className="text-gray-700">
                      We use safe, eco-friendly cleaning solutions to protect
                      your space and the environment.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 shadow-xl rounded-2xl border border-gray-200 bg-white text-left flex items-start gap-4">
                  <DollarSign className="w-8 h-8 text-yellow-500 mt-1" />
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
                  <a href="/booking">Book Now</a>
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
