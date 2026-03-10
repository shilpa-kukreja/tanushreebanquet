"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fade = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  // Frontend Only Submit (No API)
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
    } else {
      alert("Error sending email");
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }

  setLoading(false);
};

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 text-center bg-gradient-to-b from-[#f9f6f1] to-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          className="max-w-5xl mx-auto px-6"
        >
          <p className="uppercase tracking-[0.35em] text-[#C8A165] mb-6 text-sm">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-serif font-light mb-8">
            Let’s Design Your{" "}
            <span className="text-[#C8A165] font-medium">
              Grand Celebration
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether it’s a wedding, corporate gathering, or cherished family occasion, our team is ready to transform your vision into an elegant and unforgettable experience.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-4 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT INFO SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
              Why Choose Our Banquet
            </h2>

            <ul className="space-y-5 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-[#C8A165] text-xl">✨</span>
                Elegant & Spacious Interiors
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C8A165] text-xl">🍽</span>
                Premium Catering Services
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C8A165] text-xl">🎉</span>
                Customized Event Planning
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C8A165] text-xl">🤝</span>
                Dedicated Hospitality Team
              </li>
            </ul>

            <div className="mt-10 border-t pt-8 text-gray-700 space-y-4">
              <div>
                <p className="font-semibold text-[#C8A165]">📍 Location</p>
                <p>Lucknow 474 km Stone, NH 24, Mahagunpuram, Ghaziabad, Uttar Pradesh 201002</p>
              </div>

              <div>
                <p className="font-semibold text-[#C8A165]">📞 Phone</p>
                <p>+91 98100 42296</p>
              </div>

              <div>
                <p className="font-semibold text-[#C8A165]">✉ Email</p>
                <p>Tanushreegrandbanquets@gmail.com</p>
              </div>
            </div>

            <div className="mt-8 text-sm text-[#C8A165] font-medium">
              Creating Moments That Last a Lifetime
            </div>
          </motion.div>

          {/* RIGHT FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-[#C8A165] shadow-xl p-10"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
              Book a Consultation
            </h2>

            {success ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-[#C8A165] mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Our event coordinator will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8A165] outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8A165] outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8A165] outline-none"
                />

                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8A165] outline-none"
                >
                  <option value="">Select Event Type</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>Engagement</option>
                  <option>Social Gathering</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your event requirements"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C8A165] outline-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C8A165] text-white py-4 rounded-lg font-semibold hover:bg-[#b8904f] transition"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}