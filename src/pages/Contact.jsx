"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or need professional cleaning services? We’re here to
            help. Contact us through the details below, and our friendly team
            will get back to you as soon as possible.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="flex flex-col h-full">
            <Card className="flex-1 p-10 shadow-lg border border-gray-200">
              <CardContent className="space-y-8 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-100 p-5 rounded-full">
                      <MapPin className="w-10 h-10 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-blue-700 mb-1">
                        Our Office
                      </h3>
                      <p className="text-gray-700 text-lg">
                        AlShorooq AlSatae Building Maintenance <br />
                        and Cleaning Services, Dubai, UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-100 p-5 rounded-full">
                      <Phone className="w-10 h-10 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-blue-700 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-700 text-lg">+971 52 524 3843</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-100 p-5 rounded-full">
                      <Mail className="w-10 h-10 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-blue-700 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-700 text-lg">
                        info@alshorooqcleaning.ae
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.4721273016007!2d55.365148!3d25.288337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE3JzE4LjAiTiA1NcKwMjEnNTQuNSJF!5e0!3m2!1sen!2sae!4v1760854039982!5m2!1sen!2sae"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}
