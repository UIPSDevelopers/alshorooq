"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  service: z.string(),
  date: z.string().optional(),
  time: z.string().optional(), // ✅ new field
  notes: z.string().optional(),
});

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "Residential Cleaning",
      date: "",
      time: "", // ✅ default value
      notes: "",
    },
  });

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_fbwoqte",
        "template_kmjexqs",
        data,
        "4qxNukiA-YroMaD4_"
      )
      .then(
        () => {
          setSubmitted(true);
          reset();
        },
        (err) => {
          console.error("Email send error:", err);
          alert("Failed to send booking. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Book a Service</h1>
        <p className="text-gray-700 mb-6">
          Fill the form below and we'll contact you to confirm the booking.
        </p>

        {submitted && (
          <div className="bg-green-50 text-green-800 p-3 rounded mb-4">
            Booking request submitted — we'll get back to you soon.
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-2xl shadow space-y-6"
        >
          {/* Name */}
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...register("name")} placeholder="John Doe" />
            {errors.name && (
              <span className="text-red-600 text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="email@example.com"
              />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+971 50 123 4567"
              />
              {errors.phone && (
                <span className="text-red-600 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          {/* Service */}
          <div>
            <Label htmlFor="service">Service</Label>
            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Residential Cleaning">
                      Home Cleaning
                    </SelectItem>
                    <SelectItem value="A/C Cleaning & Maintenance">
                      Office & Commercial Cleaning
                    </SelectItem>
                    <SelectItem value="Move-in / Move-out Cleaning">
                      Deep & Specialized Cleaning
                    </SelectItem>
                    <SelectItem value="Deep Cleaning">
                      Maintenance Support
                    </SelectItem>
                    <SelectItem value="Carpet & Window Cleaning">
                      Custom Packages
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" {...register("date")} />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" {...register("time")} />
            </div>
          </div>

          {/* Notes */}
          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              {...register("notes")}
              rows={5}
              placeholder="Any additional requests..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white"
          >
            Submit Booking
          </Button>
        </form>
      </main>
    </div>
  );
}
