import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const SERVICES = [
  {
    title: "Residential Cleaning",
    desc: "Thorough cleaning for homes and apartments — dusting, vacuuming, mopping, kitchen & bathroom sanitization.",
    img: "https://images.pexels.com/photos/4176302/pexels-photo-4176302.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
  {
    title: "Office / Commercial Cleaning",
    desc: "Customizable daily, weekly or monthly cleaning for offices, retail stores and commercial spaces, keeping your workplace professional and hygienic.",
    img: "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
  {
    title: "Move-in / Move-out Cleaning",
    desc: "Deep clean before move-in or after move-out — ideal for tenants, landlords and property managers.",
    img: "https://images.pexels.com/photos/7415106/pexels-photo-7415106.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
  {
    title: "Deep Cleaning",
    desc: "High-attention deep cleans for kitchens, bathrooms, and hard-to-reach areas using eco-friendly disinfectants.",
    img: "https://images.pexels.com/photos/4098317/pexels-photo-4098317.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
  {
    title: "Carpet & Window Cleaning",
    desc: "Professional carpet stain removal and high-reach window cleaning for a restored, bright look.",
    img: "https://images.pexels.com/photos/14675106/pexels-photo-14675106.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
  {
    title: "Specialty Services",
    desc: "Post-construction cleanup, babysitting services, and tailored maintenance requests — contact us for details.",
    img: "https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              style={{ willChange: "transform" }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">
                    {s.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
