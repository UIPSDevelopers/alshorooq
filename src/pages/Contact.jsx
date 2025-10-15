"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need professional cleaning services? We’re here to help. 
            Contact us through the details below, and our friendly team will get back to you as soon as possible.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 shadow-sm border border-gray-100">
              <CardContent className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700">Our Office</h3>
                    <p className="text-gray-600">
                      AlShorooq AlSatae Building Maintenance <br />
                      and Cleaning Services, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700">Phone</h3>
                    <p className="text-gray-600">+971 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700">Email</h3>
                    <p className="text-gray-600">info@alshorooqcleaning.ae</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700">Working Hours</h3>
                    <p className="text-gray-600">Mon – Sat: 8:00 AM – 6:00 PM</p>
                    <p className="text-gray-600">Closed on Sundays</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=dubai,+UAE&output=embed"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[400px] border-0"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}
