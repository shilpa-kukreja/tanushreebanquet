"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, ArrowRight, Clock, MapPin, Users } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Best Banquet Hall in Ghaziabad: A Complete Guide to Choosing the Perfect Venue",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "/6thOurBlog1.jpg",
    category: "Venue Guide",
    excerpt: "Planning a wedding, reception, or milestone celebration comes with one decision that shapes everything else—the venue. This comprehensive guide walks you through everything to consider when choosing a banquet hall in Ghaziabad."
  },
  {
    id: 2,
    title: "Best Wedding Farmhouse in Ghaziabad for Grand Open Air Celebrations",
    date: "March 10, 2026",
    readTime: "6 min read",
    image: "/6thOurBlog1.jpg",
    category: "Wedding",
    excerpt: "When it comes to planning a dream wedding, choosing the right venue defines everything. If you are searching for the best wedding farmhouse in Ghaziabad, Tanushree Farm & Palace offers an unmatched blend of lush green landscapes, expansive space, and refined hospitality on NH24."
  },
  {
    id: 3,
    title: "Why Farmhouse Weddings in Ghaziabad Are Trending in 2026",
    date: "February 28, 2026",
    readTime: "5 min read",
    image: "/6thOurBlog2.jpg",
    category: "Wedding",
    excerpt: "The charm of farmhouse weddings in Ghaziabad continues to grow as couples seek venues that offer space, natural beauty, and creative freedom for their special day."
  },
  {
    id: 4,
    title: "Top Corporate Event Venue in Ghaziabad for Conferences and Product Launches",
    date: "January 15, 2026",
    readTime: "5 min read",
    image: "/6thOurBlog3.jpg",
    category: "Corporate",
    excerpt: "Corporate gatherings demand professionalism, infrastructure, and seamless coordination. Finding the right corporate event venue in Ghaziabad can significantly influence the success of your event."
  }
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
            Stories of Celebration & Style
          </motion.h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Explore refined inspirations, planning guidance, and grand event ideas designed to transform your special occasions into timeless experiences.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b68c3d] focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#b68c3d] text-white px-6 py-2 rounded-full hover:bg-[#9a742f] transition-colors">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 grid md:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group border border-gray-100"
            >
              <Link href={`/blogs/${blog.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#b68c3d] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={14} className="mr-2 text-[#C8A165]" />
                  {blog.date}
                  <span className="mx-2">•</span>
                  <Clock size={14} className="mr-2 text-[#C8A165]" />
                  {blog.readTime}
                </div>

                <Link href={`/blogs/${blog.id}`}>
                  <h3 className="text-xl font-semibold mb-3 hover:text-[#b68c3d] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>

                <p className="text-sm line-clamp-3 text-gray-600 mb-4">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-[#C8A165] text-sm font-medium hover:underline"
                  >
                    Read More <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#b68c3d] to-[#9a742f] text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Ready to Plan Your Perfect Event?
            </h2>
            <p className="text-white/90 mb-8">
              Visit Tanushree Grand Banquets to see our venue in person and discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="bg-white text-[#b68c3d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link href="/gallery">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#b68c3d] transition-colors">
                  View Gallery
                </button>
              </Link>
            </div>
            <div className="mt-6 text-sm text-white/80">
              <p>Call us: <span className="font-bold text-white">+91 98100 42296</span></p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}