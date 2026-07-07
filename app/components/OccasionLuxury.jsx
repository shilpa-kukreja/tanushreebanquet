// "use client";

// import Image from "next/image";

// const occasions = [
//   {
//     title: "Corporate Events",
//     image: "/3rdOccasion1.jpg",
//     description:
//       "Host powerful conferences, executive meetings, product launches, and corporate galas within an expansive setting designed for scale, sophistication, and seamless execution.",
//   },
//   {
//     title: "Social Celebrations",
//     image: "/3rdOccasion2.jpg",
//     description:
//       "Mark birthdays, anniversaries, family gatherings, and private soirées amidst lush open spaces crafted to elevate every intimate and grand celebration alike.",
//   },
//   {
//     title: "Cultural Celebrations",
//     image: "/3rdOccasion3.jpg",
//     description:
//       "Experience traditional ceremonies and vibrant festivities thoughtfully curated with graceful décor, spacious arrangements, and timeless grandeur.",
//   },
// ];

// export default function OccasionLuxury() {
//   return (
//     <section className="bg-white py-8 px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Section Heading */}
//         <p className="text-sm uppercase tracking-[0.3em] text-red-600 mb-4">
//           Occasion
//         </p>

//         <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#b68c3d] mb-10">
//           Celebrate Every Occasion with Distinction
//         </h2>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {occasions.map((item, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover transform group-hover:scale-110 transition duration-700"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-8 text-center">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {item.description}
//                 </p>

//                 <button className="bg-[#b68c3d] text-white px-6 py-3 rounded-md hover:bg-[#9a742f] transition duration-300 tracking-wide">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

const occasions = [
  {
    id: "corporate-events",
    title: "Corporate Events",
    image: "/3rdOccasion1.jpg",
    description:
      "Host powerful conferences, executive meetings, product launches, and corporate galas within an expansive setting designed for scale, sophistication, and seamless execution.",
    longDescription: "Our corporate event spaces are designed to impress. With state-of-the-art audiovisual equipment, flexible seating arrangements, and dedicated event coordinators, we ensure your corporate gathering exceeds expectations. From intimate board meetings to large-scale conferences, our venues adapt to your needs.",
    features: ["State-of-the-art AV equipment", "Flexible seating up to 500 guests", "Dedicated event coordinator", "High-speed WiFi", "Catering services available"],
  },
  {
    id: "social-celebrations",
    title: "Social Celebrations",
    image: "/3rdOccasion2.jpg",
    description:
      "Mark birthdays, anniversaries, family gatherings, and private soirées amidst lush open spaces crafted to elevate every intimate and grand celebration alike.",
    longDescription: "Create unforgettable memories in our stunning event spaces. Whether it's an intimate family dinner or a grand celebration, our team ensures every detail is perfect. Enjoy beautiful surroundings, exceptional service, and a personalized experience that makes your special occasion truly remarkable.",
    features: ["Customizable décor options", "Indoor and outdoor spaces", "Personalized menu planning", "Professional photography available", "Accommodation packages"],
  },
  {
    id: "cultural-celebrations",
    title: "Cultural Celebrations",
    image: "/3rdOccasion3.jpg",
    description:
      "Experience traditional ceremonies and vibrant festivities thoughtfully curated with graceful décor, spacious arrangements, and timeless grandeur.",
    longDescription: "Honor your cultural traditions in a setting that reflects their beauty and significance. Our venues provide the perfect backdrop for weddings, religious ceremonies, and cultural festivals. We work closely with you to incorporate traditional elements while providing modern comforts and amenities.",
    features: ["Traditional décor options", "Spacious ceremony areas", "Cultural catering specialists", "Traditional music arrangements", "Guest accommodation"],
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
          Celebrate Every Occasion with Distinction
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

                <Link href={`/occasions/${item.id}`}>
                  <button className="bg-[#b68c3d] text-white px-6 py-3 rounded-md hover:bg-[#9a742f] transition duration-300 tracking-wide">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}