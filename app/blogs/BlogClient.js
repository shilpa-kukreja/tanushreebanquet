"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, ArrowRight, Clock, Search, X } from "lucide-react";

// Blog data with slugs
const blogsData = [
  {
    id: 1,
    title: "Best Banquet Hall in Ghaziabad: A Complete Guide to Choosing the Perfect Venue",
    slug: "best-banquet-hall-in-ghaziabad-complete-guide",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "/6thOurBlog1.jpg",
    category: "Venue Guide",
    excerpt: "Planning a wedding, reception, or milestone celebration comes with one decision that shapes everything else—the venue. This comprehensive guide walks you through everything to consider when choosing a banquet hall in Ghaziabad."
  },
  {
    id: 2,
    title: "Engagement Venue in Ghaziabad: How to Choose the Perfect Place for Your Ring Ceremony",
    slug: "engagement-venue-in-ghaziabad-perfect-place-ring-ceremony",
    date: "April 10, 2026",
    readTime: "6 min read",
    image: "/blog2.jpeg",
    category: "Venue Guide",
    excerpt: "An engagement is one of those milestones that sets the tone for everything that follows. This guide covers why the venue matters, what to look for, and the common mistakes to avoid before booking."
  }
];

// Get unique categories
const categories = [...new Set(blogsData.map(blog => blog.category))];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);
  const [isSearching, setIsSearching] = useState(false);

  // Filter blogs based on search and category
  useEffect(() => {
    let result = blogsData;
    
    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(blog => blog.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(blog => 
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredBlogs(result);
  }, [searchQuery, selectedCategory]);

  // Handle search - no type annotations
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setIsSearching(e.target.value.length > 0);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
  };

  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-800 min-h-screen">
        {/* HERO */}
        <section className="py-20 text-center bg-gradient-to-b from-[#f9f6f1] to-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-[#C8A165]"
          >
            Stories of Celebration & Style
          </motion.h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto px-4">
            Explore refined inspirations, planning guidance, and grand event ideas designed to transform your special occasions into timeless experiences.
          </p>

          {/* Search Bar with JavaScript functionality */}
          <div className="mt-8 max-w-xl mx-auto px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by title, category, or keyword..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-6 py-3 pr-32 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b68c3d] focus:border-transparent transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
              <button 
                onClick={() => setIsSearching(true)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#b68c3d] text-white px-6 py-2 rounded-full hover:bg-[#9a742f] transition-colors flex items-center gap-2"
              >
                <Search size={18} />
                Search
              </button>
            </div>
            
            {/* Search results count */}
            {isSearching && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-500 mt-3 text-left"
              >
                Found {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} 
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </motion.p>
            )}
          </div>

          {/* Category Filter with JavaScript */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 px-4">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === "All"
                  ? "bg-[#b68c3d] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#b68c3d] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* BLOG GRID with animation */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
          {filteredBlogs.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-serif text-gray-700 mb-4">No articles found</h3>
              <p className="text-gray-500 mb-8">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-[#b68c3d] hover:underline font-medium"
              >
                Reset all filters
              </button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-10">
              <AnimatePresence>
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group border border-gray-100"
                  >
                    <Link href={`/blogs/${blog.slug}`}>
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

                      <Link href={`/blogs/${blog.slug}`}>
                        <h3 className="text-xl font-semibold mb-3 hover:text-[#b68c3d] transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                      </Link>

                      <p className="text-sm line-clamp-3 text-gray-600 mb-4">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="inline-flex items-center text-[#C8A165] text-sm font-medium hover:underline group"
                        >
                          Read More 
                          <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
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