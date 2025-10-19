import React from "react";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            AlShorooq AlSatae Building Maintenance and Cleaning Services
          </h2>
          <div className="flex flex-col gap-2 text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+971501234567" className="hover:text-white">
                +971 52 524 3843
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@alshorooq.ae" className="hover:text-white">
                info@alshorooq.ae
              </a>
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
          <p className="text-gray-300 mb-2">
            Dubai, United Arab Emirates
          </p>
          <p className="text-gray-300">
            © {new Date().getFullYear()} AlShorooq AlSatae. All rights reserved.
          </p>
        </div>

        {/* Small Google Map */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Location</h3>
          <div className="w-full h-32 rounded overflow-hidden shadow-md border border-gray-700">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.4721273016007!2d55.365148!3d25.288337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE3JzE4LjAiTiA1NcKwMjEnNTQuNSJF!5e0!3m2!1sen!2sae!4v1760854039982!5m2!1sen!2sae"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
