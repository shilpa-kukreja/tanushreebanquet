"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f0c] text-gray-300 border-t border-gray-800">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LOGO & ABOUT */}
        <div>
          <h2 className="text-3xl font-serif text-[#C8A165] font-semibold tracking-wide">
            Tanushree
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            Grand Banquet & Farms
          </p>

          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            We create unforgettable celebrations with elegance, luxury,
            and flawless execution. Your perfect venue for weddings,
            corporate gatherings, and grand celebrations.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {["About", "Gallery", "Blogs", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-[#C8A165] transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* EVENTS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Events
          </h3>
          <ul className="space-y-3 text-sm">
            {["Corporate Events", "Cultural Events", "Social Events"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-[#C8A165] transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Contact Info
          </h3>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-[#C8A165] mt-1" />
              <span>+91 98100 42296(Dr. Vivek Mishra)</span>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={16} className="text-[#C8A165] mt-1" />
              <span>Tanushreegrandbanquets@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#C8A165] mt-1" />
              <span>
                Lucknow 474 km Stone, NH 24, Mahagunpuram, Ghaziabad, Uttar Pradesh 201002
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-xl text-white font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Get updates about events, offers, and exclusive celebrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 w-full sm:w-80 bg-[#111] border border-gray-700 rounded-full focus:outline-none focus:border-[#C8A165] text-sm"
            />
            <button className="px-8 py-3 bg-[#C8A165] text-black font-medium rounded-full hover:bg-[#b8904f] transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tanushree Convention & Banquet. All Rights Reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="p-2 rounded-full bg-[#111] hover:bg-[#C8A165] hover:text-black transition duration-300"
            >
              <Facebook size={16} />
            </Link>

            <Link
              href="#"
              className="p-2 rounded-full bg-[#111] hover:bg-[#C8A165] hover:text-black transition duration-300"
            >
              <Instagram size={16} />
            </Link>

            <Link
              href="#"
              className="p-2 rounded-full bg-[#111] hover:bg-[#C8A165] hover:text-black transition duration-300"
            >
              <Youtube size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}