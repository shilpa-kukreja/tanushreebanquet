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
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function BlogDetailClient({ blog }) {
  const [copied, setCopied] = useState(false);

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
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-[#b68c3d] transition-colors">
                Home
              </Link>
              <span className="text-gray-400">›</span>
              <Link href="/blogs" className="text-gray-600 hover:text-[#b68c3d] transition-colors">
                Blogs
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-[#b68c3d] font-medium line-clamp-1">{blog.title}</span>
            </div>
          </div>
        </div>

        <section className="relative h-[55vh] min-h-[450px] w-full overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30">
            <div className="flex items-end h-full max-w-7xl mx-auto px-6 lg:px-12 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="bg-[#b68c3d] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <span className="text-white/80 text-sm flex items-center gap-1">
                    <Clock size={14} /> {blog.readTime}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                  {blog.title}
                </h1>
                <div className="flex items-center gap-4 mt-4 text-white/80 flex-wrap">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> {blog.date}
                  </span>
                  <span className="w-px h-4 bg-white/30 hidden sm:block"></span>
                  <span>By {blog.author.name}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none prose-headings:text-[#b68c3d] prose-headings:font-serif prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-gray-700 prose-strong:text-[#b68c3d] prose-ul:text-gray-700 prose-li:text-gray-700 prose-a:text-[#b68c3d] prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 prose-a:hover:opacity-80 prose-a:transition"
              >
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </motion.article>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600">Share this article:</span>
                    <div className="flex gap-2">
                      <button
                        onClick={handleShare}
                        className="p-2 bg-gray-100 rounded-full hover:bg-[#b68c3d] hover:text-white transition-colors"
                        aria-label="Share"
                      >
                        {copied ? <Check size={18} /> : <Share2 size={18} />}
                      </button>
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-[#b68c3d] hover:text-white transition-colors">
                        <Heart size={18} />
                      </button>
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-[#b68c3d] hover:text-white transition-colors">
                        <Bookmark size={18} />
                      </button>
                    </div>
                  </div>
                  <Link href="/contact" className="text-[#b68c3d] font-medium hover:underline flex items-center gap-2">
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {blog.faqs && blog.faqs.length > 0 && (
                <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                  <h2 className="text-3xl font-serif text-[#b68c3d] mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {blog.faqs.map((faq, index) => (
                      <details key={index} className="group">
                        <summary className="flex items-center justify-between cursor-pointer p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                          <span className="font-medium text-gray-800">{faq.question}</span>
                          <span className="text-[#b68c3d] group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="p-4 text-gray-600 leading-relaxed">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 bg-[#b68c3d]/5 rounded-2xl p-8 border border-[#b68c3d]/10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#b68c3d] rounded-full flex items-center justify-center text-white text-2xl font-serif">
                    T
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{blog.author.name}</h3>
                    <p className="text-gray-600">{blog.author.role}</p>
                    <p className="text-gray-600 text-sm mt-1">{blog.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <div className="bg-[#b68c3d] text-white rounded-2xl p-6">
                  <h4 className="text-xl font-serif mb-4">Plan Your Event</h4>
                  <p className="text-white/80 text-sm mb-4">Get a free consultation for your celebration</p>
                  <Link href="/contact">
                    <button className="w-full bg-white text-[#b68c3d] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Enquire Now
                    </button>
                  </Link>
                  <div className="mt-4 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <Phone size={14} /> +91 98100 42296
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Mail size={14} /> tanushreegrandbanquets@gmail.com
                    </div>
                  </div>
                </div>

                {blog.relatedPosts && blog.relatedPosts.length > 0 && (
                  <div>
                    <h4 className="text-lg font-serif text-gray-900 mb-4">Related Articles</h4>
                    <div className="space-y-4">
                      {blog.relatedPosts.map((post) => (
                        <Link key={post.id} href={`/blogs/${post.slug}`} className="block group">
                          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-32 w-full">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
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

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-serif text-gray-900 mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/occasions/wedding" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Wedding Venue
                      </Link>
                    </li>
                    <li>
                      <Link href="/occasions/corporate-events" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Corporate Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/occasions/social-celebrations" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Social Celebrations
                      </Link>
                    </li>
                    <li>
                      <Link href="/occasions/cultural-celebrations" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Cultural Celebrations
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-600 hover:text-[#b68c3d] transition-colors flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#b68c3d]" /> Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#b68c3d] transition-colors">
              <ArrowLeft size={18} /> Back to all blogs
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
