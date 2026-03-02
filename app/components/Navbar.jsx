"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [mobileEventOpen, setMobileEventOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "GALLERY", path: "/gallery" },
    { name: "BLOGS", path: "/blogs" },
    { name: "CONTACT", path: "/contact" },
  ];

  const NavItem = ({ link }) => (
    <Link
      href={link.path}
      className="relative group text-[15px] tracking-wide"
    >
      <span
        className={`transition ${
          pathname === link.path
            ? "text-[#C8A165]"
            : "text-gray-800 group-hover:text-[#C8A165]"
        }`}
      >
        {link.name}
      </span>

      <span
        className={`absolute left-0 -bottom-2 h-[2px] bg-[#C8A165] transition-all duration-300 ${
          pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );

  return (
    <>
      {/* 🔝 TOP BAR */}
      <div className="hidden md:flex justify-between items-center px-6 lg:px-20 py-2 text-sm bg-black text-white">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14} /> +91 98765 43210
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} /> info@yourdomain.com
          </span>
        </div>
        <span className="tracking-widest text-xs">
          LUXURY WEDDING & EVENT PLANNER
        </span>
      </div>

      {/* 🔥 MAIN NAVBAR */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <Link href="/">
            <Image src="/logo.webp" alt="logo" width={150} height={60} />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-12 font-medium">

            {navLinks.slice(0, 3).map((link) => (
              <NavItem key={link.name} link={link} />
            ))}

            {/* EVENTS */}
            {/* <div
              className="relative"
              onMouseEnter={() => setEventOpen(true)}
              onMouseLeave={() => setEventOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#C8A165]">
                EVENTS <ChevronDown size={16} />
              </button>

              <div
                className={`absolute top-[130%] left-0 w-52 bg-white rounded-xl shadow-2xl py-3 transition-all duration-300 ${
                  eventOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                }`}
              >
                {["Wedding", "Birthday", "Corporate"].map((item) => (
                  <Link
                    key={item}
                    href={`/events/${item.toLowerCase()}`}
                    className="block px-6 py-2 text-sm hover:bg-[#C8A165]/10 hover:text-[#C8A165]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div> */}

            {navLinks.slice(3).map((link) => (
              <NavItem key={link.name} link={link} />
            ))}

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="bg-[#C8A165] text-white px-6 py-2 rounded-full hover:bg-black transition"
            >
              BOOK NOW
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <Menu
            size={30}
            onClick={() => setOpen(true)}
            className="md:hidden"
          />
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* 📱 MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white z-50 shadow-2xl transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <Image src="/logo.webp" alt="logo" width={120} height={50} />
          <X onClick={() => setOpen(false)} />
        </div>

        <div className="flex flex-col p-6 space-y-6 font-medium">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setOpen(false)}
              className={pathname === link.path ? "text-[#C8A165]" : ""}
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE EVENTS */}
          <div>
            <button
              onClick={() => setMobileEventOpen(!mobileEventOpen)}
              className="flex justify-between w-full"
            >
              EVENTS <ChevronDown size={18} />
            </button>

            {mobileEventOpen && (
              <div className="flex flex-col gap-3 mt-3 pl-3 text-sm">
                <Link href="/events/wedding">Wedding</Link>
                <Link href="/events/birthday">Birthday</Link>
                <Link href="/events/corporate">Corporate</Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="bg-[#C8A165] text-white text-center py-3 rounded-full"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </>
  );
}