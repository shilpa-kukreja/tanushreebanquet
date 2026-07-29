"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  Heart,
  Clock,
  Check,
  CheckCircle,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  User,
  Sparkles,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function BlogDetailClient({ blog }) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        alert("Copy the URL from the address bar");
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-800 min-h-screen">
        {/* Breadcrumb - refined with subtle background and better spacing */}
        <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-gray-500 hover:text-[#b68c3d] transition-colors duration-200">
                Home
              </Link>
              <ChevronRight size={14} className="text-gray-300" />
              <Link href="/blogs" className="text-gray-500 hover:text-[#b68c3d] transition-colors duration-200">
                Blogs
              </Link>
              <ChevronRight size={14} className="text-gray-300" />
              <span className="text-[#b68c3d] font-medium line-clamp-1 max-w-xs">{blog.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section - more immersive with better overlay and gradient */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20">
            <div className="flex items-end h-full max-w-7xl mx-auto px-6 lg:px-12 pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-white max-w-4xl space-y-4"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-[#b68c3d] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {blog.category}
                  </span>
                  <span className="text-white/80 text-sm flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Clock size={14} /> {blog.readTime}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight drop-shadow-xl">
                  {blog.pagetitle}
                </h1>
                <div className="flex items-center gap-4 text-white/80 flex-wrap text-sm">
                  <span className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Calendar size={15} /> {blog.date}
                  </span>
                  <span className="w-px h-5 bg-white/30 hidden sm:block"></span>
                  <span className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <User size={15} /> By {blog.author.name}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article Column */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none prose-headings:text-[#b68c3d] prose-headings:font-serif prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#b68c3d] prose-ul:text-gray-700 prose-li:text-gray-700 prose-a:text-[#b68c3d] prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 prose-a:hover:opacity-80 prose-a:transition prose-img:rounded-xl prose-img:shadow-lg"
              >
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </motion.article>

              {/* Engagement Bar - improved design with more interaction */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500">Share this:</span>
                    <div className="flex gap-2">
                      <button
                        onClick={handleShare}
                        className="group p-2.5 bg-gray-100 rounded-full hover:bg-[#b68c3d] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
                        aria-label="Share"
                      >
                        {copied ? <Check size={18} className="text-green-500" /> : <Share2 size={18} />}
                      </button>
                      <button
                        onClick={() => setLiked(!liked)}
                        className="group p-2.5 bg-gray-100 rounded-full hover:bg-[#b68c3d] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
                        aria-label="Like"
                      >
                        <Heart size={18} className={liked ? "fill-[#b68c3d] text-[#b68c3d]" : ""} />
                      </button>
                      <button
                        onClick={() => setSaved(!saved)}
                        className="group p-2.5 bg-gray-100 rounded-full hover:bg-[#b68c3d] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
                        aria-label="Save"
                      >
                        <Bookmark size={18} className={saved ? "fill-[#b68c3d] text-[#b68c3d]" : ""} />
                      </button>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#b68c3d] font-medium hover:text-[#a07a2f] transition-colors group"
                  >
                    Enquire Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* FAQ Section - improved accordion with better styling */}
              {blog.faqs && blog.faqs.length > 0 && (
                <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles size={24} className="text-[#b68c3d]" />
                    <h2 className="text-3xl font-serif text-[#b68c3d]">Frequently Asked Questions</h2>
                  </div>
                  <div className="space-y-3">
                    {blog.faqs.map((faq, index) => (
                      <details key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100/50">
                        <summary className="flex items-center justify-between cursor-pointer p-5 rounded-xl hover:bg-gray-50/50 transition-colors">
                          <span className="font-medium text-gray-800 group-hover:text-[#b68c3d] transition-colors pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            size={20}
                            className="text-[#b68c3d] group-open:rotate-180 transition-transform duration-300 flex-shrink-0"
                          />
                        </summary>
                        <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/80">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Card - more refined with shadow and gradient */}
              <div className="mt-16 bg-gradient-to-br from-[#b68c3d]/5 to-white rounded-2xl p-8 border border-[#b68c3d]/10 shadow-sm">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#b68c3d] rounded-full flex items-center justify-center text-white text-2xl font-serif shadow-lg">
                    {blog.author.name.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-gray-900">{blog.author.name}</h3>
                    <p className="text-[#b68c3d] text-sm font-medium">{blog.author.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xl">{blog.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - enhanced with better cards and sticky behavior */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* CTA Card - more prominent */}
                <div className="bg-gradient-to-br from-[#b68c3d] to-[#a07a2f] text-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-serif mb-2">Plan Your Event</h4>
                  <p className="text-white/80 text-sm mb-5">Get a free consultation for your celebration</p>
                  <Link href="/contact">
                    <button className="w-full bg-white text-[#b68c3d] py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
                      Enquire Now
                    </button>
                  </Link>
                  <div className="mt-5 space-y-2 text-sm text-white/80">
                    <div className="flex items-center gap-2.5">
                      <Phone size={15} className="text-white/70" /> +91 98100 42296
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail size={15} className="text-white/70" /> tanushreegrandbanquets@gmail.com
                    </div>
                  </div>
                </div>

                {/* Related Posts - better card design */}
                {blog.relatedPosts && blog.relatedPosts.length > 0 && (
                  <div>
                    <h4 className="text-lg font-serif text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-[#b68c3d] rounded-full"></span>
                      Related Articles
                    </h4>
                    <div className="space-y-4">
                      {blog.relatedPosts.map((post) => (
                        <Link key={post.id} href={`/blogs/${post.slug}`} className="block group">
                          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/50 group-hover:border-[#b68c3d]/20">
                            <div className="relative h-36 w-full overflow-hidden">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>
                            <div className="p-4">
                              <h5 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-[#b68c3d] transition-colors">
                                {post.title}
                              </h5>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Links - more visual with icons */}
                <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100">
                  <h4 className="text-lg font-serif text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#b68c3d] rounded-full"></span>
                    Quick Links
                  </h4>
                  <ul className="space-y-2.5">
                    <li>
                      <Link href="/occasions/wedding" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2.5 group">
                        <CheckCircle size={16} className="text-[#b68c3d] group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline underline-offset-2">Wedding Venue</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/occasions/corporate-events" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2.5 group">
                        <CheckCircle size={16} className="text-[#b68c3d] group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline underline-offset-2">Corporate Events</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/occasions/social-celebrations" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2.5 group">
                        <CheckCircle size={16} className="text-[#b68c3d] group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline underline-offset-2">Social Celebrations</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/occasions/cultural-celebrations" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2.5 group">
                        <CheckCircle size={16} className="text-[#b68c3d] group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline underline-offset-2">Cultural Celebrations</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2.5 group">
                        <CheckCircle size={16} className="text-[#b68c3d] group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline underline-offset-2">Gallery</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2.5 group">
                        <CheckCircle size={16} className="text-[#b68c3d] group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline underline-offset-2">Contact Us</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Blogs - with decorative line */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#b68c3d] transition-colors group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to all blogs
            </Link>
            <span className="text-sm text-gray-400 hidden sm:inline">© {new Date().getFullYear()} Tanushree Grand Banquets</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}