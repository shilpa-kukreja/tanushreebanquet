"use client";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/1stwebcover.jpg"
        alt="Tanushree Farm & Palace"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        {/* TOP TAGLINE */}
        <p className="text-[#C8A165] tracking-[0.4em] uppercase text-sm mb-4">
          TANUSHREE FARM & PALACE
        </p>

        {/* SUB TAGLINE */}
        <p className="text-white/80 mb-6 text-lg">
          Where Grand Celebrations Begin
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-white text-4xl md:text-6xl font-light leading-tight mb-10">
          Crafting Your Moments
          <br />
          <span className="font-semibold text-[#C8A165]">
            Extraordinary
          </span>
        </h1>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/contact"
            className="bg-[#C8A165] text-white px-8 py-3 rounded-full text-lg tracking-wide hover:bg-white hover:text-black transition duration-300"
          >
            Reserve Your Date
          </Link>

          <Link
            href="/gallery"
            className="border border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition duration-300"
          >
            Discover The Venue
          </Link>

        </div>
      </div>
    </section>
  );
}