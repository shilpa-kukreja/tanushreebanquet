"use client";

import Image from "next/image";

const occasions = [
  {
    title: "Corporate Events",
    image: "/tanushree-banner3.jpg",
    description:
      "Host impactful conferences, meetings, and corporate celebrations in a refined and sophisticated setting.",
  },
  {
    title: "Social Events",
    image: "/tanushree-banner4.jpg",
    description:
      "Celebrate birthdays, anniversaries, and private gatherings with elegance and flawless hospitality.",
  },
  {
    title: "Cultural Events",
    image: "/tanushree-banner3.jpg",
    description:
      "Experience vibrant cultural celebrations curated with grandeur and artistic excellence.",
  },
];

export default function OccasionLuxury() {
  return (
    <section className="bg-white py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Heading */}
        <p className="text-sm uppercase tracking-[0.3em] text-red-600 mb-4">
          Occasion
        </p>

        <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#b68c3d] mb-10">
          Celebrate Every Occasion in Style
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {occasions.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <button className="bg-[#b68c3d] text-white px-6 py-3 rounded-md hover:bg-[#9a742f] transition duration-300 tracking-wide">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}