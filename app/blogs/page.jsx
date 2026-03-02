"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Top Wedding Decoration Trends in 2026",
    date: "March 10, 2026",
    image: "/tanushree-banner3.jpg",
    excerpt:
      "Discover the latest luxury wedding decor trends that are redefining elegance and grandeur.",
  },
  {
    id: 2,
    title: "How to Plan a Perfect Corporate Event",
    date: "February 28, 2026",
    image: "/tanushree-banner2.webp",
    excerpt:
      "From venue selection to flawless execution, here’s how you can host a successful corporate event.",
  },
  {
    id: 3,
    title: "Creating Unforgettable Birthday Celebrations",
    date: "January 15, 2026",
    image: "/tanushree-banner.webp",
    excerpt:
      "Make your special day extraordinary with premium decor, lighting, and catering ideas.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-800 min-h-screen">

        {/* HERO */}
        <section className="py-24 text-center bg-gradient-to-b from-[#f9f6f1] to-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-[#C8A165]"
          >
            Our Blog & Insights
          </motion.h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, expert advice, and inspiration
            for weddings, corporate gatherings, and grand celebrations.
          </p>
        </section>

        {/* BLOG GRID */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group border border-gray-100"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={14} className="mr-2 text-[#C8A165]" />
                  {blog.date}
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {blog.excerpt}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center text-[#C8A165] text-sm font-medium hover:underline"
                >
                  Read More <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}