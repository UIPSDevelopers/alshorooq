import React, { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Booking() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Residential Cleaning",
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: connect to a booking backend or send an email
    console.log("Booking data:", data);
    setSubmitted(true);
    setData({ name: "", email: "", phone: "", service: "Residential Cleaning", date: "", notes: "" });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Book a Service</h1>
        <p className="text-gray-700 mb-6">Fill the form below and we'll contact you to confirm the booking.</p>

        {submitted && <div className="bg-green-50 text-green-800 p-3 rounded mb-4">Booking request submitted — we'll get back to you soon.</div>}

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input name="name" value={data.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="email" value={data.email} onChange={handleChange} required placeholder="Email" className="w-full border rounded px-3 py-2" />
            <input name="phone" value={data.phone} onChange={handleChange} required placeholder="Phone" className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Service</label>
            <select name="service" value={data.service} onChange={handleChange} className="w-full border rounded px-3 py-2">
              <option>Residential Cleaning</option>
              <option>Office / Commercial Cleaning</option>
              <option>Move-in / Move-out Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Carpet & Window Cleaning</option>
              <option>Specialty Services</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preferred date</label>
            <input type="date" name="date" value={data.date} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Additional notes</label>
            <textarea name="notes" value={data.notes} onChange={handleChange} className="w-full border rounded px-3 py-2 h-28" />
          </div>

          <button className="bg-blue-700 text-white px-5 py-2 rounded">Submit Booking</button>
        </form>
      </main>
    </div>
  );
}
