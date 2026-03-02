"use client";

import Image from "next/image";

export default function AboutLuxury() {
  return (
    <section className="bg-[#f4efe6] py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <img
            src="/2ndAboutUs.jpg" // Replace with your image
            alt="Luxury Banquet Hall"
           
            className="object-cover w-full "
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-red-600 mb-4">
            About Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#b68c3d] leading-tight mb-6">
            Farm & Palace Ghaziabad
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Rooted in excellence and inspired by celebration, Tanushree Farm & Palace is a distinguished destination where elegance meets open air grandeur. Designed for those who believe every occasion deserves scale, beauty, and perfection, our venue reflects timeless charm blended with modern sophistication.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Nestled in a prime city location with seamless accessibility, Tanushree offers an expansive green landscape ideal for weddings, receptions, corporate gatherings, and private festivities. 
          </p>

          {/* Luxury Quote */}
          <div className="relative pl-8 border-l-4 border-[#b68c3d] mb-8">
            <p className="text-2xl italic text-gray-800 font-light">
             From curated decor to exceptional hospitality and refined culinary experiences, we craft celebrations that feel effortless, grand, and truly unforgettable.
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