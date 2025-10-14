import React, { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to backend / email service
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Contact Us</h1>
        <p className="text-gray-700 mb-6">Questions or requests? Send us a message and we’ll respond promptly.</p>

        {sent && <div className="bg-green-50 text-green-800 p-4 rounded mb-4">Thanks — we received your message.</div>}

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input required name="name" value={form.name} onChange={handleChange}
              className="w-full border rounded px-3 py-2" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input required name="email" value={form.email} onChange={handleChange} type="email"
                className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input required name="phone" value={form.phone} onChange={handleChange}
                className="w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea required name="message" value={form.message} onChange={handleChange}
              className="w-full border rounded px-3 py-2 h-32" />
          </div>

          <button className="bg-blue-700 text-white px-5 py-2 rounded">Send Message</button>
        </form>
      </main>
    </div>
  );
}
