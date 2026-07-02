// components/Footer.jsx
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

// Default data (you can override via props)
const defaultQuickLinks = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "blogs" },
  { label: "Contact", href: "contact" },
];

const defaultEventsLinks = [
  { label: "Corporate Events", href: "#" },
  { label: "Cultural Events", href: "#" },
  { label: "Social Events", href: "#" },
];

const defaultSocialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/pages/Tanushree-Farm-House-Ghaziabad/345933495432211", label: "Facebook" },
  // { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

const defaultContactInfo = [
  {
    icon: Phone,
    text: "+91 98100 42296 (Vivek mohan)",
  },
  {
    icon: Mail,
    text: "tanushreegrandbanquets@gmail.com",
  },
  {
    icon: MapPin,
    text: "Lucknow 474 km Stone, NH 24, Mahagunpuram, Ghaziabad, Uttar Pradesh 201002",
  },
];

export default function Footer({
  quickLinks = defaultQuickLinks,
  eventsLinks = defaultEventsLinks,
  socialLinks = defaultSocialLinks,
  contactInfo = defaultContactInfo,
  companyName = "Tanushree",
  tagline = "Grand Banquet & Farms",
  aboutText = "We create unforgettable celebrations with elegance, luxury, and flawless execution. Your perfect venue for weddings, corporate gatherings, and grand celebrations.",
  newsletterPlaceholder = "Enter your email",
  newsletterButtonText = "Subscribe",
  copyrightText = `© ${new Date().getFullYear()} Tanushree Convention & Banquet. All Rights Reserved.`,
}) {
  return (
    <footer className="bg-[#0b0f0c] text-gray-300 border-t border-gray-800">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* LOGO & ABOUT */}
        <div>
          <h2 className="text-3xl font-serif text-[#C8A165] font-semibold tracking-wide">
            {companyName}
          </h2>
          <p className="text-sm mt-2 text-gray-400">{tagline}</p>
          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            {aboutText}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-[#C8A165] transition duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* EVENTS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">Events</h3>
          <ul className="space-y-3 text-sm">
            {eventsLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-[#C8A165] transition duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Contact Info
          </h3>
          <div className="space-y-4 text-sm text-gray-400">
            {contactInfo.map(({ icon: Icon, text }, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Icon size={16} className="text-[#C8A165] mt-1" />
                <span>{text}</span>
              </div>
            ))}
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
              placeholder={newsletterPlaceholder}
              className="px-5 py-3 w-full sm:w-80 bg-[#111] border border-gray-700 rounded-full focus:outline-none focus:border-[#C8A165] text-sm"
            />
            <button className="px-8 py-3 bg-[#C8A165] text-black font-medium rounded-full hover:bg-[#b8904f] transition duration-300">
              {newsletterButtonText}
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">{copyrightText}</p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="p-2 rounded-full bg-[#111] hover:bg-[#C8A165] hover:text-black transition duration-300"
                aria-label={label}
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}