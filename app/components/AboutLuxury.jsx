"use client";

import Image from "next/image";

export default function AboutLuxury() {
  return (
    <section className="bg-[#f4efe6] py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/tanushree-banner2.webp" // Replace with your image
            alt="Luxury Banquet Hall"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-red-600 mb-4">
            About Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#b68c3d] leading-tight mb-6">
            Tanushree ~ Convention & Banquet Ghaziabad
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Founded by pioneers in the real estate and hospitality industry,
            Tanushree Convention & Banquet is a symbol of elegance and grandeur.
            Our luxury banquet halls in Noida are thoughtfully designed to
            deliver unforgettable experiences with exquisite interiors,
            premium services, and world-class hospitality.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Strategically located in the heart of the city with seamless
            connectivity, Tanushree is the perfect destination for weddings,
            receptions, corporate events, and private celebrations. We combine
            fine catering, impeccable service, and sophisticated ambiance to
            create truly magical moments.
          </p>

          {/* Luxury Quote */}
          <div className="relative pl-8 border-l-4 border-[#b68c3d] mb-8">
            <p className="text-2xl italic text-gray-800 font-light">
              “Life’s special moments deserve magic —
              create yours with Tanushree.”
            </p>
          </div>

          <button className="bg-[#b68c3d] text-white px-8 py-3 rounded-md hover:bg-[#9a742f] transition duration-300 tracking-wide">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}