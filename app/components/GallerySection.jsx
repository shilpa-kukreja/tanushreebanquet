"use client";

import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">

        {/* Top Label */}
        <span className="text-sm uppercase tracking-[0.4em] text-red-500 font-medium">
          Events
        </span>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-serif font-semibold text-[#B08B3E]">
          Gallery of Celebrations
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-700 font-medium">
          <button className="border-b-2 border-red-500 pb-1">All</button>
          <button className="hover:text-red-500 transition">Corporate Event</button>
          <button className="hover:text-red-500 transition">Wedding</button>
          <button className="hover:text-red-500 transition">Birthday Party</button>
          <button className="hover:text-red-500 transition">Roka Ceremony</button>
          <button className="hover:text-red-500 transition">Mundan Ceremony</button>
          <button className="hover:text-red-500 transition">Anniversary</button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {[
            "/image1 (1).jpeg",
            "/image1 (2).jpeg",
            "/image1 (3).jpeg",
            "/image1 (4).jpeg",
            "/image1 (5).jpeg",
            "/image1 (6).jpeg",
            "/5thEvents7.jpg",
            "/5thEvents8.jpg",
            "/5thEvents9.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={src}
                alt="Event Image"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* ================= TWO PROFESSIONAL BOXES BELOW IMAGES ================= */}
        {/* <div className="mt-20 grid md:grid-cols-2 gap-10 text-left">

         
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#E8E1D8] hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
              Memorable Corporate Events
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              From conferences to annual celebrations, we deliver seamless
              corporate experiences with cutting-edge technology and elegant
              décor.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• State-of-the-art AV setup</li>
              <li>• Professional stage & lighting</li>
              <li>• Premium hospitality services</li>
              <li>• Customized branding & themes</li>
            </ul>
          </div>

          
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#E8E1D8] hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
              Grand Social Celebrations
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Celebrate weddings, birthdays, anniversaries, and traditional
              ceremonies in a luxurious ambiance crafted to perfection.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Elegant décor & floral styling</li>
              <li>• Gourmet catering services</li>
              <li>• Spacious banquet halls</li>
              <li>• Valet parking & guest assistance</li>
            </ul>
          </div>

        </div> */}
        {/* ====================================================================== */}

      </div>
    </section>
  );
}