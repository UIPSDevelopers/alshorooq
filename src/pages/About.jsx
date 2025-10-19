import React from "react";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Brush,
  Diamond,
  Eye,
  Settings,
  Heart,
  UserCheck,
  Globe2,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Hero Header */}
        <motion.section
          className="bg-gradient-to-r from-blue-100 to-white rounded-3xl p-10 shadow-lg text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-bold text-blue-700">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At AlShorooq AlSatae, cleanliness isn’t just a service — it’s our
            promise. We are a UAE-based cleaning and maintenance company
            dedicated to providing exceptional cleaning and A/C maintenance
            solutions for both residential and commercial spaces. From sparkling
            clean homes to fresh and efficient air systems, our goal is to
            create comfortable, healthy, and inviting environments for our
            clients every single day.
          </p>
        </motion.section>

        {/* Our Story */}
        <motion.section
          className="space-y-6 bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="text-blue-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-blue-700">Our Story</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            AlShorooq AlSatae was established with a simple vision — to raise
            the standard of cleaning and maintenance services across the UAE. We
            noticed that many clients were looking for reliable, detail-oriented
            professionals who not only cleaned but genuinely cared. That’s where
            our story began.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Over the years, we’ve grown into a trusted name, known for our
            professionalism, friendly team, and commitment to excellence.
            Whether it’s a villa, apartment, office, or commercial building, our
            team approaches every job with dedication and pride.
          </p>
        </motion.section>

        {/* Our Team */}
        <motion.section
          className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-inner hover:shadow-md transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2 mb-2">
            <Users className="text-blue-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-blue-700">Our Team</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our people are the heart of what we do. Every member of our team —
            from our skilled cleaners to our experienced A/C technicians — is
            fully trained, background-checked, and passionate about delivering
            quality results. We believe in treating every client’s property as
            if it were our own, ensuring attention to detail, safety, and
            respect in every task.
          </p>
        </motion.section>

        {/* Our Services */}
        <motion.section
          className="space-y-6 bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2 mb-2">
            <Brush className="text-blue-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-blue-700">
              Our Services
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <Badge variant="secondary">•</Badge> Regular, deep, and
              move-in/move-out cleaning
            </li>
            <li className="flex items-start gap-2">
              <Badge variant="secondary">•</Badge> Post-construction cleaning
            </li>
            <li className="flex items-start gap-2">
              <Badge variant="secondary">•</Badge> Window and glass cleaning
            </li>
            <li className="flex items-start gap-2">
              <Badge variant="secondary">•</Badge> A/C duct cleaning and full
              system maintenance
            </li>
          </ul>
          <p className="mt-2 text-gray-700 leading-relaxed">
            We also provide customized cleaning solutions designed to fit your
            schedule, preferences, and budget — because every space has unique
            needs.
          </p>
        </motion.section>

        {/* Our Promise */}
        <motion.section
          className="space-y-4 bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2 mb-2">
            <Diamond className="text-blue-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-blue-700">
              Our Promise
            </h2>
          </div>
          <div className="border-l-4 border-blue-700 pl-4 italic text-gray-800">
            When you choose AlShorooq AlSatae, you’re choosing a company built
            on integrity, trust, and personal service. We don’t just clean — we
            care. Our clients appreciate our reliability, transparent pricing,
            and consistent quality. Many of them stay with us for years because
            they know they can depend on us to get the job done right, every
            time.
          </div>
        </motion.section>

        {/* Vision & Mission */}
        <motion.section
          className="grid md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col gap-2">
            <Settings className="text-blue-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-blue-700">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become one of the UAE’s most trusted and respected cleaning and
              maintenance providers — recognized for quality, care, and
              long-lasting client relationships.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col gap-2">
            <Eye className="text-blue-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-blue-700">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver exceptional cleaning and A/C maintenance services that
              enhance comfort, promote hygiene, and create better living and
              working environments for every customer we serve.
            </p>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-blue-700 text-center">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🌟",
                title: "Quality",
                text: "We aim for excellence in every job.",
              },
              {
                emoji: "🤝",
                title: "Trust",
                text: "We value honesty, transparency, and long-term relationships.",
              },
              {
                emoji: "💚",
                title: "Care",
                text: "We treat every property like our own.",
              },
              {
                emoji: "👷",
                title: "Professionalism",
                text: "Our team is trained, reliable, and courteous.",
              },
              {
                emoji: "🌍",
                title: "Sustainability",
                text: "We use eco-friendly cleaning products whenever possible to protect our clients and the environment.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-sm p-5 border hover:shadow-md hover:scale-105 transition transform flex flex-col items-start gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">{value.emoji}</span>
                <h3 className="font-semibold text-blue-700">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Separator />

        {/* Closing Statement */}
        <motion.section
          className="text-center text-gray-700 italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          At AlShorooq AlSatae, we believe that a clean environment is the
          foundation of a healthy, happy life.
          <br />
          Let us take care of your space — so you can focus on what matters
          most.
        </motion.section>
      </main>
    </div>
  );
}
