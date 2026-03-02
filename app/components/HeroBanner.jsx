"use client";
import React from 'react'

import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/tanushree-banner.webp"   // 👉 your banquet image
        alt="Jubilee Convention & Banquet"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        {/* TOP TAGLINE */}
        <p className="text-[#C8A165] tracking-[0.35em] uppercase text-sm mb-4">
          Tanushree ~ Convention & Banquet
        </p>

        {/* SUB TAGLINE */}
        <p className="text-white/80 mb-6 text-lg">
          Celebrate in Style. Remember Forever.
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-white text-4xl md:text-6xl font-light leading-tight mb-10">
          Making Your Moments
          <br />
          <span className="font-semibold text-[#C8A165]">
            Magical
          </span>
        </h1>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/contact"
            className="bg-[#C8A165] text-white px-8 py-3 rounded-full text-lg tracking-wide hover:bg-white hover:text-black transition duration-300"
          >
            Book Reservation
          </Link>

          <Link
            href="/gallery"
            className="border border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition duration-300"
          >
            Explore Hall
          </Link>

        </div>
      </div>
    </section>
  );
}