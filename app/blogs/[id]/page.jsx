"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, ArrowRight, Share2, Bookmark, Heart, Clock, MapPin, Users, CheckCircle, Phone, Mail } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Blog data - can be moved to a separate file
export const blogData = {
  id: 1,
  title: "Best Banquet Hall in Ghaziabad: A Complete Guide to Choosing the Perfect Venue",
  date: "March 15, 2026",
  readTime: "8 min read",
  image: "/6thOurBlog1.jpg",
  category: "Venue Guide",
  author: {
    name: "Tanushree Team",
    role: "Event Experts"
  },
  excerpt: "Planning a wedding, reception, or milestone celebration comes with one decision that shapes everything else—the venue. This comprehensive guide walks you through everything to consider when choosing a banquet hall.",
  content: `
    <p>Planning a wedding, reception, or milestone celebration comes with one decision that shapes everything else—the venue. If you're searching for the <strong>best banquet hall in Ghaziabad</strong>, you're likely comparing space, decor, catering quality, and convenience before making a final call. This guide walks you through everything to consider when choosing a banquet hall, and why <strong>Tanushree Grand Banquet & Farms</strong> has become a preferred choice for couples and families across Ghaziabad, Noida, Delhi, and the wider NCR region.</p>

    <p>Whether you're organizing a <Link href="/occasions/corporate-events" className="text-[#b68c3d] hover:underline">corporate event</Link>, a <Link href="/occasions/social-celebrations" className="text-[#b68c3d] hover:underline">birthday celebration</Link>, or planning a <Link href="/occasions/wedding" className="text-[#b68c3d] hover:underline">wedding</Link>, the right <strong>wedding banquet hall in Ghaziabad</strong> sets the tone for the entire experience. Let's break down what truly matters when selecting a venue.</p>

    <h2>Why Choosing the Right Banquet Hall is Important</h2>
    <p>A banquet hall isn't just a physical space—it's where memories are made. The venue you choose directly affects:</p>
    <ul>
      <li><strong>Guest experience</strong> - comfort, accessibility, and ambiance shape how guests remember your event</li>
      <li><strong>Event flow</strong> - spacious layouts allow for smoother catering, seating, and entertainment logistics</li>
      <li><strong>Budget management</strong> - a well-equipped venue reduces the need for external vendors</li>
      <li><strong>Overall aesthetic</strong> - decor and lighting elevate photos, videos, and the emotional tone of the celebration</li>
    </ul>
    <p>This is why couples and event planners spend considerable time comparing a <strong>marriage hall in Ghaziabad</strong> before booking. A hasty decision can mean compromising on space, catering quality, or parking—all of which affect the day itself.</p>

    <h2>Key Features to Look for in the Best Banquet Hall in Ghaziabad</h2>
    <p>When evaluating a <strong>luxury banquet hall in Ghaziabad</strong>, here are the features that genuinely make a difference:</p>

    <h3>1. Spacious Indoor & Outdoor Areas</h3>
    <p>Flexibility matters. A hall that offers both indoor elegance and outdoor charm allows you to plan ceremonies, receptions, and after-parties without switching locations.</p>

    <h3>2. Elegant Decor & Ambiance</h3>
    <p>Look for venues with tasteful interiors, modern lighting, and decor options that can be customized to match your theme—whether traditional, contemporary, or fusion.</p>

    <h3>3. In-House Catering Quality</h3>
    <p>Food is often the most talked-about part of any celebration. A venue offering pure vegetarian catering—spanning North Indian, South Indian, and Chinese cuisines—ensures a consistent, high-quality dining experience without coordinating multiple outside vendors.</p>

    <h3>4. Ample Parking Space</h3>
    <p>For guests traveling from Ghaziabad, Noida, Delhi, and NCR, hassle-free parking is non-negotiable. This is one of the most overlooked yet essential features of a good <strong>party hall in Ghaziabad</strong>.</p>

    <h3>5. Modern Amenities</h3>
    <p>DJ setups with LED walls, contemporary lighting systems, and comfortable seating arrangements all contribute to a seamless event experience.</p>

    <h3>6. Professional Event Management Support</h3>
    <p>A dedicated team that handles logistics, coordination, and on-ground execution takes the stress off the host, allowing them to actually enjoy the celebration.</p>

    <h3>7. Guest Capacity</h3>
    <p>Depending on your event size, choosing a hall that comfortably accommodates your guest list—without feeling cramped or overly vast—matters. Venues like <strong>Tanushree Grand Banquet & Farms</strong>, which support 400–500 guests, strike a practical balance for mid-to-large gatherings.</p>

    <h2>Types of Events You Can Host at Tanushree Grand Banquet & Farms</h2>
    <p>One of the biggest advantages of choosing <strong>Tanushree Grand Banquet & Farms</strong> is its versatility. The venue is designed to host a wide range of celebrations, including:</p>
    <ul>
      <li><Link href="/occasions/wedding" className="text-[#b68c3d] hover:underline"><strong>Wedding Celebrations</strong></Link> - a grand, elegant setting for the main ceremony</li>
      <li><Link href="/occasions/wedding" className="text-[#b68c3d] hover:underline"><strong>Reception Parties</strong></Link> - spacious layouts ideal for evening receptions</li>
      <li><strong>Engagement & Ring Ceremony</strong> - intimate yet festive arrangements</li>
      <li><Link href="/occasions/social-celebrations" className="text-[#b68c3d] hover:underline"><strong>Birthday Parties</strong></Link> - customizable decor for milestone birthdays</li>
      <li><Link href="/occasions/social-celebrations" className="text-[#b68c3d] hover:underline"><strong>Anniversary Celebrations</strong></Link> - a warm setting for commemorating special years</li>
      <li><strong>Baby Shower</strong> - comfortable, elegant spaces for smaller family gatherings</li>
      <li><Link href="/occasions/corporate-events" className="text-[#b68c3d] hover:underline"><strong>Corporate Events</strong></Link> - professional setups for conferences, seminars, and company celebrations</li>
      <li><Link href="/occasions/cultural-celebrations" className="text-[#b68c3d] hover:underline"><strong>Cultural & Social Events</strong></Link> - flexible spaces suited to community and cultural gatherings</li>
    </ul>
    <p>This range makes it a genuinely multi-purpose <strong>reception venue in Ghaziabad</strong>, suited to nearly any occasion.</p>

    <h2>Why Choose Tanushree Grand Banquet & Farms for Your Next Celebration?</h2>
    <p>With so many options available, why do families and event planners consistently choose <strong>Tanushree Grand Banquet & Farms</strong>?</p>

    <h3>Elegant, Spacious Setting</h3>
    <p>The venue offers a spacious, lavish banquet hall designed to comfortably host 400–500 guests, with both indoor and outdoor arrangements available.</p>

    <h3>Pure Vegetarian In-House Catering</h3>
    <p>Guests can enjoy a curated pure vegetarian menu featuring North Indian, South Indian, and Chinese cuisines, complemented by live chaat and food counters ensuring every guest is well taken care of.</p>

    <h3>Modern Amenities</h3>
    <p>From DJ setups with LED walls to contemporary lighting design, the venue is equipped to match the energy of any celebration, big or small.</p>

    <h3>Ample Parking</h3>
    <p>Convenient, ample parking space means guests arriving from across Ghaziabad, Noida, Delhi, and NCR won't face last-minute hassles.</p>

    <h3>Professional Event Management</h3>
    <p>A dedicated support team assists with planning and on-ground coordination, making <strong>Tanushree Grand Banquet & Farms</strong> a dependable choice for hosts who want a smooth, well-managed event.</p>

    <h3>Customized Event Planning</h3>
    <p>Every celebration is different, and the venue accommodates personalized requests—from decor themes to seating arrangements—to match your vision.</p>

    <p>Whether you're planning a <Link href="/occasions/wedding" className="text-[#b68c3d] hover:underline">wedding</Link>, a <Link href="/occasions/corporate-events" className="text-[#b68c3d] hover:underline">corporate event</Link>, or a <Link href="/occasions/social-celebrations" className="text-[#b68c3d] hover:underline">birthday party</Link>, <strong>Tanushree Grand Banquet & Farms</strong> offers the elegance, space, and support needed to make the day memorable.</p>

    <h2>Tips for Booking the Best Banquet Hall in Ghaziabad</h2>
    <p>If you're actively comparing venues, keep these tips in mind:</p>
    <ul>
      <li><strong>Visit in person</strong> - photos rarely capture the true scale and ambiance of a space</li>
      <li><strong>Ask about catering flexibility</strong> - confirm cuisine options and whether live counters are included</li>
      <li><strong>Check guest capacity against your list</strong> - avoid overcrowding or an overly empty-feeling hall</li>
      <li><strong>Clarify parking arrangements</strong> - especially for weekend events with high guest turnout</li>
      <li><strong>Confirm what's included</strong> - decor, sound systems, lighting, and event management support can vary significantly between venues</li>
      <li><strong>Book early</strong> - popular dates for weddings and receptions fill up quickly, especially during peak season</li>
    </ul>
    <p>Taking the time to compare these details before booking a <strong>wedding venue in Ghaziabad</strong> can save considerable stress later.</p>

    <h2>Conclusion</h2>
    <p>Choosing the <strong>best banquet hall in Ghaziabad</strong> comes down to a combination of space, catering quality, amenities, and reliable event support. For couples, families, and corporate planners looking for an <strong>affordable banquet hall in Ghaziabad</strong> that doesn't compromise on elegance or service, <strong>Tanushree Grand Banquet & Farms</strong> offers a well-rounded solution—spacious interiors, pure vegetarian in-house catering, modern amenities, ample parking, and professional event management, all in one convenient Ghaziabad location.</p>

    <p>If you're planning your next <Link href="/occasions/wedding" className="text-[#b68c3d] hover:underline">wedding</Link>, <Link href="/occasions/social-celebrations" className="text-[#b68c3d] hover:underline">reception, birthday</Link>, or <Link href="/occasions/corporate-events" className="text-[#b68c3d] hover:underline">corporate event</Link>, consider visiting <strong>Tanushree Grand Banquet & Farms</strong> to see the space in person and discuss how it can be customized for your celebration.</p>
  `,
  faqs: [
    {
      question: "What is the guest capacity at Tanushree Grand Banquet & Farms?",
      answer: "The venue comfortably accommodates 400–500 guests, making it suitable for mid-to-large celebrations such as weddings, receptions, and corporate events."
    },
    {
      question: "Does Tanushree Grand Banquet & Farms offer in-house catering?",
      answer: "Yes, the venue provides pure vegetarian in-house catering, including North Indian, South Indian, and Chinese cuisines, along with live chaat and food counters."
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, Tanushree Grand Banquet & Farms offers ample parking space, making it convenient for guests traveling from Ghaziabad, Noida, Delhi, and NCR."
    },
    {
      question: "What types of events can be hosted here?",
      answer: "The venue supports a wide range of events, including weddings, receptions, engagements, birthday parties, anniversaries, baby showers, corporate events, and cultural or social gatherings."
    },
    {
      question: "Does the venue provide event planning support?",
      answer: "Yes, professional event management support is available to assist with coordination, decor, and on-ground execution, ensuring a smooth experience for hosts."
    }
  ],
  relatedPosts: [
    { id: 2, title: "Why Farmhouse Weddings in Ghaziabad Are Trending in 2026", image: "/6thOurBlog2.jpg" },
    { id: 3, title: "Top Corporate Event Venue in Ghaziabad", image: "/6thOurBlog3.jpg" }
  ]
};

export default function BlogDetailPage() {
  const blog = blogData;

  return (
    <>
      <Navbar />
      
      <main className="bg-white text-gray-800 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-[#b68c3d] transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <Link href="/blogs" className="text-gray-600 hover:text-[#b68c3d] transition-colors">Blogs</Link>
              <span className="text-gray-400">›</span>
              <span className="text-[#b68c3d] font-medium line-clamp-1">{blog.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30">
            <div className="flex items-end h-full max-w-7xl mx-auto px-6 lg:px-12 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#b68c3d] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <span className="text-white/80 text-sm flex items-center gap-1">
                    <Clock size={14} /> {blog.readTime}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                  {blog.title}
                </h1>
                <div className="flex items-center gap-4 mt-4 text-white/80">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> {blog.date}
                  </span>
                  <span className="w-px h-4 bg-white/30"></span>
                  <span>By {blog.author.name}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none prose-headings:text-[#b68c3d] prose-headings:font-serif prose-strong:text-[#b68c3d]"
              >
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </motion.article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600">Share this article:</span>
                    <div className="flex gap-2">
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-[#b68c3d] hover:text-white transition-colors">
                        <Share2 size={18} />
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

              {/* FAQs Section */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-[#b68c3d] mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {blog.faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                        <span className="font-medium text-gray-800">{faq.question}</span>
                        <span className="text-[#b68c3d] group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="p-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-[#b68c3d]/5 rounded-2xl p-8 border border-[#b68c3d]/10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#b68c3d] rounded-full flex items-center justify-center text-white text-2xl font-serif">
                    T
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{blog.author.name}</h4>
                    <p className="text-gray-600">{blog.author.role}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Expert event planners with years of experience in creating unforgettable celebrations at Tanushree Grand Banquets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Quick Enquiry */}
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

                {/* Related Posts */}
                <div>
                  <h4 className="text-lg font-serif text-gray-900 mb-4">Related Articles</h4>
                  <div className="space-y-4">
                    {blog.relatedPosts.map((post) => (
                      <Link key={post.id} href={`/blogs/${post.id}`} className="block group">
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

                {/* Quick Links */}
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

          {/* Back to Blogs */}
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