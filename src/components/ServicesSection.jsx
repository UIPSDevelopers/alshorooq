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

💡 Perfect for villas, apartments, and residential buildings.`,
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

💼 Ideal for offices, shops, schools, and commercial facilities.`,
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

🌬️ Better air, better comfort, better health.`,
    img: "https://i.postimg.cc/SKv95SG1/certified-technician-contracted-fix-broken-air-conditioner-dismantling-condenser-front-coil-panel-ch.jpg",
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

🏗️ Perfect for new builds, renovations, or spaces needing a total refresh.`,
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-16">
          Professional Cleaning & A/C Maintenance You Can Trust
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-white">
                {/* Portrait Image */}
                <div className="w-full aspect-[3/4] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-700 flex items-center gap-2">
                    {s.emoji} {s.title}
                  </h3>
                  <Separator className="my-2" />
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Packages Card */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-white">
            <CardContent className="p-10 space-y-6 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-700 flex justify-center items-center gap-3">
                💡 Custom Packages
              </h3>
              <Separator className="my-4" />
              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
                Every space is unique — that’s why we offer flexible, tailored
                service plans. Whether you need a one-time service or scheduled
                cleaning, we’ll design a package that fits your needs and budget
                perfectly.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
