import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const SERVICES = [
  {
    title: "Residential Cleaning",
    desc:
      "Thorough cleaning for homes and apartments — dusting, vacuuming, mopping, kitchen & bathroom sanitization.",
    img: "https://images.pexels.com/photos/4176302/pexels-photo-4176302.jpeg?_gl=1*c37wlh*_ga*MTY2NjU2MTg0Mi4xNzYwNDIwODc0*_ga_8JE65Q40S6*czE3NjA0MjQwNjYkbzIkZzEkdDE3NjA0MjQwODEkajQ1JGwwJGgw",
  },
  {
    title: "Office / Commercial Cleaning",
    desc:
      "Customizable daily, weekly or monthly cleaning for offices, retail stores and commercial spaces, keeping your workplace professional and hygienic.",
    img: "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    title: "Move-in / Move-out Cleaning",
    desc:
      "Deep clean before move-in or after move-out — ideal for tenants, landlords and property managers.",
    img: "https://images.pexels.com/photos/7415106/pexels-photo-7415106.jpeg?_gl=1*t6nxbh*_ga*MTY2NjU2MTg0Mi4xNzYwNDIwODc0*_ga_8JE65Q40S6*czE3NjA0MjQwNjYkbzIkZzEkdDE3NjA0MjQ3NzEkajQ5JGwwJGgw",
  },
  {
    title: "Deep Cleaning",
    desc:
      "High-attention deep cleans for kitchens, bathrooms, and hard-to-reach areas using eco-friendly disinfectants.",
    img: "https://images.pexels.com/photos/4098317/pexels-photo-4098317.jpeg?_gl=1*1suvxaq*_ga*MTY2NjU2MTg0Mi4xNzYwNDIwODc0*_ga_8JE65Q40S6*czE3NjA0MjQwNjYkbzIkZzEkdDE3NjA0MjQ4MzYkajQ3JGwwJGgw",
  },
  {
    title: "Carpet & Window Cleaning",
    desc:
      "Professional carpet stain removal and high-reach window cleaning for a restored, bright look.",
    img: "https://images.pexels.com/photos/14675106/pexels-photo-14675106.jpeg?_gl=1*naj8rj*_ga*MTY2NjU2MTg0Mi4xNzYwNDIwODc0*_ga_8JE65Q40S6*czE3NjA0MjQwNjYkbzIkZzEkdDE3NjA0MjQ5NTIkajE0JGwwJGgw",
  },
  {
    title: "Specialty Services",
    desc:
      "Post-construction cleanup, babysitting services, and tailored maintenance requests — contact us for details.",
    img: "https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1097",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="flex flex-col items-center p-6 rounded-2xl shadow hover:shadow-lg transition">
                {/* Portrait Image */}
                {s.img && (
                  <div className="w-48 h-56 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="text-center p-0">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    {s.title}
                  </h3>
                  <p className="text-gray-700">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
